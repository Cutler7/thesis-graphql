import {DbConnectionController} from './db-connection.controller';
import {Db} from 'mongodb';
import {products, users} from '../../data/_data';

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

  initWithData(db: Db) {
    return Promise.all([
      db.collection('user').insertMany(users),
      db.collection('product').insertMany(products),
    ]);
  }
}
