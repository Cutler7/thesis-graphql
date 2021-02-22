import {ResolverMap} from '../interface/resolver-map.interface';
import {Collection} from '../enum/collection.enum';
import {getPageOfData} from '../util/get-page-of-data.util';
import {getCollection} from '../util/get-collection.util';
import {ObjectId} from 'mongodb';
import {ResolverContext} from '../interface/resolver-context.interface';

const getProductById = (ctx: ResolverContext, id: string) => getCollection(ctx, Collection.PRODUCT)
  .findOne({_id: new ObjectId(id)});

const getCommentById = (ctx: ResolverContext, id: string) => getCollection(ctx, Collection.COMMENT)
  .findOne({_id: new ObjectId(id)});

export const productResolvers: ResolverMap = {
  Query: {
    async productList(obj, args, context) {
      const products = await getCollection(context, Collection.PRODUCT)
        .find({})
        .toArray();
      return getPageOfData(products);
    },
    async getProduct(obj, args, context) {
      return await getProductById(context, args.id);
    },
  },
  Mutation: {
    async deleteProduct(obj, args, context) {
      const product = await getProductById(context, args.id);
      await getCollection(context, Collection.PRODUCT)
        .deleteOne({_id: new ObjectId(args.id)});
      return product;
    },
    async createOrUpdateProduct(obj, args, context) {
      const product = await getProductById(context, args.id);
      await getCollection(context, Collection.PRODUCT).findOneAndUpdate();
    },
    async addComment(obj, args, context) {
      return [];
    },
    async updateAmount(obj, args, context) {
      return [];
    },
  },
  Product: {
    async comments(obj, args, context) {
      return await getCollection(context, Collection.COMMENT)
        .find({productId: obj._id})
        .toArray();
    },
    async properties(obj, args, context) {
      return await getCollection(context, Collection.PRODUCT_PROPERTY)
        .find({productId: obj._id})
        .toArray();
    },
  },
};
