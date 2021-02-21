import {ObjectId} from 'mongodb';
import {ResolverContext} from '../interface/resolver-context.interface';
import {ResolverMap} from '../interface/resolver-map.interface';
import {PageResponse} from '../interface/page-response.interface';

const getUsersCollection = (ctx: ResolverContext) => ctx.dbConnectionController
  .getDb()
  .collection('user');

const getUserById = (ctx: ResolverContext, id: string) => getUsersCollection(ctx)
  .findOne({_id: new ObjectId(id)});

const getPageOfData = (data: any[], page: number = 0, pageSize: number = 10): PageResponse => {
  const startIdx = page * pageSize;
  return {
    pageSize,
    page,
    totalRecords: data.length,
    content: data.slice(startIdx, startIdx + pageSize),
  };
};

export const userResolvers: ResolverMap = {
  Query: {
    async userList(obj, args, context) {
      const users = await getUsersCollection(context)
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
      const inserted = await getUsersCollection(context)
        .insertOne(args.user);
      return await getUserById(context, inserted.insertedId);
    },
    async deleteUser(obj, args, context) {
      const user = await getUserById(context, args.id);
      await getUsersCollection(context)
        .deleteOne({_id: new ObjectId(args.id)});
      return user;
    },
  },
};
