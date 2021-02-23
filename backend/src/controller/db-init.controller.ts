import {DbConnectionController} from './db-connection.controller';
import {Db, InsertOneWriteOpResult} from 'mongodb';
import {comments, dataProps, orders, products, users} from '../../data/_data';
import {cloneDeep} from 'lodash';
import {Collection} from '../enum/collection.enum';

export class DbInitController {

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

  private initProducts(db: Db): Promise<any> {
    const commentList = [];
    const propertiesList = [];
    const insertProductPromise = [];
    products.forEach(product => insertProductPromise.push(
      db.collection(Collection.PRODUCT).insertOne(product)
        .then(inserted => {
          this.groupProductDependentData(commentList, comments, inserted);
          this.groupProductDependentData(propertiesList, dataProps, inserted);
        }),
    ));
    return Promise.all(insertProductPromise)
      .then(() => db.collection(Collection.COMMENT).insertMany(commentList))
      .then(() => db.collection(Collection.PRODUCT_PROPERTY).insertMany(propertiesList));
  }

  private groupProductDependentData(list: any[], dataSet: any[], inserted: InsertOneWriteOpResult<any>) {
    const dataCpy = cloneDeep(dataSet);
    dataCpy.forEach(el => el.productId = inserted.insertedId);
    list.push(...dataCpy);
  }

  private initOrders(db: Db): Promise<any> {
    return db.collection(Collection.ORDER).insertMany(orders);
  }
}
