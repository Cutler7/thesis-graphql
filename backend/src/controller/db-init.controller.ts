import {DbConnectionController} from './db-connection.controller';
import {Db, InsertOneWriteOpResult, ObjectId} from 'mongodb';
import {comments, orders, users} from '../../data/_data';
import {cloneDeep, random, range} from 'lodash';
import {Collection} from '../enum/collection.enum';
import {ResizeImageController} from './resize-image.controller';
import {insertImage} from '../util/insert-image.util';
import * as fs from 'fs';
import {PRODUCT_DATA} from '../../data/product.data';

enum ImgSize {
  MIN = 'img min',
  FULL = 'img full',
}

export class DbInitController {

  imgResize = new ResizeImageController(160);

  constructor(
    private db: DbConnectionController,
  ) {
  }

  initDatabase(): Promise<any> {
    const db = this.db.getDb();
    return db.dropDatabase()
      .then(() => this.initWithData(db));
  }

  private initWithData(db: Db) {
    return db.collection(Collection.USER).insertMany(users)
      .then(() => this.initProducts(db))
      .then(() => this.initOrders(db));
  }

  private async initProducts(db: Db): Promise<any> {
    const data: Record<string, any[]> = {
      commentList: comments,
      propertiesList: [],
      insertProductPromise: [],
    };
    PRODUCT_DATA.forEach(product => {
      data.insertProductPromise.push(this.insertProduct(db, product, data));
    });
    return Promise.all(data.insertProductPromise)
      .then(() => db.collection(Collection.COMMENT).insertMany(data.commentList))
      .then(() => db.collection(Collection.PRODUCT_PROPERTY).insertMany(data.propertiesList));
  }

  private groupProductDependentData(list: any[] = [], dataSet: any[] = [], inserted: InsertOneWriteOpResult<any>) {
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

  private async insertProduct(db: Db, product: any, data: Record<string, any[]>): Promise<any> {
    const {img, comments, properties} = product;
    this.deletePropertiesFromObject(product, ['comments', 'properties', 'img']);
    const ids = await this.initAssets(db, img);
    product.minImgId = ids[0];
    product.fullImgId = ids[1];
    return db.collection(Collection.PRODUCT).insertOne(product)
      .then(inserted => {
        this.groupProductDependentData(data.commentList, comments, inserted);
        this.groupProductDependentData(data.propertiesList, properties, inserted);
      });
  }

  private async initAssets(db: Db, path: string): Promise<ObjectId[]> {
    const file = fs.readFileSync(path);
    const fileMin = await this.imgResize.transformImageToMiniature(file);
    const objMin = await insertImage(db, fileMin, ImgSize.MIN);
    const objFull = await insertImage(db, file, ImgSize.FULL);
    return [objMin.insertedId, objFull.insertedId];
  }

  private deletePropertiesFromObject(obj: object, props: string[]) {
    props.forEach(prop => delete obj[prop]);
  }
}
