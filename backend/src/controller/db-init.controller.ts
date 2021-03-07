import {DbConnectionController} from './db-connection.controller';
import {Db, InsertOneWriteOpResult} from 'mongodb';
import {comments, dataProps, orders, products, users} from '../../data/_data';
import {cloneDeep, random, range} from 'lodash';
import {Collection} from '../enum/collection.enum';
import {ResizeImageController} from './resize-image.controller';
import {insertImage} from '../util/insert-image.util';
import * as fs from 'fs';

enum ImgSize {
  MIN = 'img min',
  FULL = 'img full',
}

export class DbInitController {

  imgResize = new ResizeImageController(200);

  constructor(
    private db: DbConnectionController,
  ) {
  }

  initDatabase(): Promise<any> {
    const db = this.db.getDb();
    return db.dropDatabase()
      .then(() => this.initWithData(db));
  }

  test(): Promise<any> {
    const db = this.db.getDb();
    return this.initAssets(db);
  }

  private initWithData(db: Db) {
    return db.collection(Collection.USER).insertMany(users)
      .then(() => this.initAssets(db))
      .then(() => this.initProducts(db))
      .then(() => this.initOrders(db));
  }

  private async initProducts(db: Db): Promise<any> {
    const commentList = [];
    const propertiesList = [];
    const insertProductPromise = [];
    const imgFull = await db.collection(Collection.ASSET).findOne({description: ImgSize.FULL});
    const imgMin = await db.collection(Collection.ASSET).findOne({description: ImgSize.MIN});
    products.forEach(product => {
      product.fullImgId = imgFull._id;
      product.minImgId = imgMin._id;
      insertProductPromise.push(
        db.collection(Collection.PRODUCT).insertOne(product)
          .then(inserted => {
            this.groupProductDependentData(commentList, comments, inserted);
            this.groupProductDependentData(propertiesList, dataProps, inserted);
          }),
      );
    });
    return Promise.all(insertProductPromise)
      .then(() => db.collection(Collection.COMMENT).insertMany(commentList))
      .then(() => db.collection(Collection.PRODUCT_PROPERTY).insertMany(propertiesList));
  }

  private groupProductDependentData(list: any[], dataSet: any[], inserted: InsertOneWriteOpResult<any>) {
    const dataCpy = cloneDeep(dataSet);
    dataCpy.forEach(el => el.productId = inserted.insertedId);
    list.push(...dataCpy);
  }

  private async initOrders(db: Db): Promise<any> {
    const insertOrderPromise = [];
    const orderItemList = [];
    const products = await db.collection(Collection.PRODUCT).find({}).toArray();
    orders.forEach(order => insertOrderPromise.push(
      db.collection(Collection.ORDER).insertOne(order)
        .then(inserted => {
          range(random(1, 10)).forEach(() => orderItemList.push({
            createdAt: new Date(),
            productId: products[random(0, products.length - 1)]._id,
            amount: random(1, 40),
            orderId: inserted.insertedId,
          }));
        }),
    ));
    return Promise.all(insertOrderPromise)
      .then(() => db.collection(Collection.ORDER_ITEM).insertMany(orderItemList));
  }

  private async initAssets(db: Db) {
    const file = fs.readFileSync('./data/img/example.jpg');
    const fileMin = await this.imgResize.transformImageToMiniature(file);
    await insertImage(db, fileMin, ImgSize.MIN);
    await insertImage(db, file, ImgSize.FULL);
  }
}
