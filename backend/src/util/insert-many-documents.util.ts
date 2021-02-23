import {Collection} from '../enum/collection.enum';
import {ResolverContext} from '../interface/resolver-context.interface';
import {getCollection} from './get-collection.util';

export const insertManyDocuments = async (
  objList: Record<string, any>[],
  collection: Collection,
  ctx: ResolverContext,
) => {
  objList.forEach(el => el.createdAt = new Date());
  return await getCollection(ctx, collection)
    .insertMany(objList);
};
