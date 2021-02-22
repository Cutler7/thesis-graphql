import {ResolverContext} from '../interface/resolver-context.interface';
import {Collection} from '../enum/collection.enum';

export const getCollection = (ctx: ResolverContext, collection: Collection) => ctx.dbConnectionController
  .getDb()
  .collection(collection);
