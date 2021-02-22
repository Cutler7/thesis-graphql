import {ObjectId} from 'mongodb';
import {ResolverContext} from '../interface/resolver-context.interface';
import {ResolverMap} from '../interface/resolver-map.interface';
import {Collection} from '../enum/collection.enum';
import {getPageOfData} from '../util/get-page-of-data.util';
import {getCollection} from '../util/get-collection.util';

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
      return {
        user: {username: 'admin'},
        token: 'test',
      };
    },
  },
  Mutation: {
    async createUser(obj, args, context) {
      args.user.createdAt = new Date;
      const inserted = await getCollection(context, Collection.USER)
        .insertOne(args.user);
      return await getUserById(context, inserted.insertedId);
    },
    async deleteUser(obj, args, context) {
      const user = await getUserById(context, args.id);
      await getCollection(context, Collection.USER)
        .deleteOne({_id: new ObjectId(args.id)});
      return user;
    },
  },
};
