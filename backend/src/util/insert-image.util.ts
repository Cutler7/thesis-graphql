import {Binary, Db} from 'mongodb';
import {Collection} from '../enum/collection.enum';

export const insertImage = async (db: Db, file: Buffer, description?: string) =>
  await db.collection(Collection.ASSET).insertOne({
    description,
    file: new Binary(file),
  });
