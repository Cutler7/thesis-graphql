import {ResolverContext} from '../interface/resolver-context.interface';
import {getCollection} from './get-collection.util';
import {Collection} from '../enum/collection.enum';
import {ObjectId} from 'mongodb';

export const insertDocument = async <T extends { createdAt: Date }>(
  obj: T,
  collection: Collection,
  ctx: ResolverContext,
): Promise<T> => {
  obj.createdAt = new Date();
  const inserted = await getCollection(ctx, collection)
    .insertOne(obj);
  return await getCollection(ctx, collection)
    .findOne({_id: new ObjectId(inserted.insertedId)});
};
