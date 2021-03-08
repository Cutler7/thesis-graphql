import {ObjectId} from 'mongodb';
import {ResolverContext} from '../interface/resolver-context.interface';
import {ResolverMap} from '../interface/resolver-map.interface';
import {Collection} from '../enum/collection.enum';
import {getPageOfData} from '../util/get-page-of-data.util';
import {getCollection} from '../util/get-collection.util';
import {insertDocument} from '../util/insert-document.util';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const getUserById = (ctx: ResolverContext, id: string) => getCollection(ctx, Collection.USER)
  .findOne({_id: new ObjectId(id)});

export const userResolvers: ResolverMap = {
  Query: {
    async userList(obj, args, context) {
      const users = await getCollection(context, Collection.USER)
        .find({})
        .toArray();
      return getPageOfData(users, 0, 10000);
    },
    async login(obj, args, context) {
      const errorMsg = 'Username or password incorrect';
      const user = await getCollection(context, Collection.USER)
        .findOne({username: args.credentials.username});
      if (!user) {
        throw Error(errorMsg);
      }
      const passwordCorrect = await bcrypt.compare(args.credentials.password, user.password);
      if (!passwordCorrect) {
        throw Error(errorMsg);
      }
      const token = jwt.sign({role: 'admin'}, user.password, {expiresIn: 60 * 20});
      delete user.password;
      return {user, token};
    },
  },
  Mutation: {
    async createUser(obj, args, context) {
      args.user.password = await bcrypt.hash(args.user.password, 10);
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
