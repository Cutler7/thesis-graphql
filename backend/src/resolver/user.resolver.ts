import {ObjectId} from 'mongodb';
import {ResolverContext} from '../interface/resolver-context.interface';
import {ResolverMap} from '../interface/resolver-map.interface';
import {Collection} from '../enum/collection.enum';
import {getPageOfData} from '../util/get-page-of-data.util';
import {getCollection} from '../util/get-collection.util';
import {insertDocument} from '../util/insert-document.util';

const getUserById = (ctx: ResolverContext, id: string) => getCollection(ctx, Collection.USER)
  .findOne({_id: new ObjectId(id)});

export const userResolvers: ResolverMap = {
  Query: {
    async userList(obj, args, context) {
      const users = await getCollection(context, Collection.USER)
        .find({})
        .toArray();
      return getPageOfData(users);
    },
    async login(obj, args, context) {
      const user = await getCollection(context, Collection.USER)
        .findOne({username: args.credentials.username});
      return {
        user: user || {username: 'admin'},
        token: 'test',
      };
    },
  },
  Mutation: {
    async createUser(obj, args, context) {
      return await insertDocument(args.user, Collection.USER, context);
    },
    async deleteUser(obj, args, context) {
      const user = await getUserById(context, args.id);
      await getCollection(context, Collection.USER)
        .deleteOne({_id: new ObjectId(args.id)});
      return user;
    },
  },
};
