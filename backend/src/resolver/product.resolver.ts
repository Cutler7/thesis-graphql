import {ResolverMap} from '../interface/resolver-map.interface';
import {Collection} from '../enum/collection.enum';
import {getPageOfData} from '../util/get-page-of-data.util';
import {getCollection} from '../util/get-collection.util';
import {ObjectId} from 'mongodb';
import {ResolverContext} from '../interface/resolver-context.interface';
import {insertDocument} from '../util/insert-document.util';
import {insertManyDocuments} from '../util/insert-many-documents.util';

const getProductById = (ctx: ResolverContext, id: string) => getCollection(ctx, Collection.PRODUCT)
  .findOne({_id: new ObjectId(id)});

const updateProduct = async (product: any, ctx: ResolverContext) => {
  const id = product._id;
  delete product._id;
  const result = await getCollection(ctx, Collection.PRODUCT).findOneAndUpdate(
    {_id: new ObjectId(id)},
    {$set: product},
    {returnOriginal: false},
  );
  return result.value;
};

const deleteProductDependentDocuments = async (productId: string, ctx: ResolverContext) => {
  await Promise.all([
    getCollection(ctx, Collection.COMMENT)
      .deleteMany({productId: new ObjectId(productId)}),
    getCollection(ctx, Collection.PRODUCT_PROPERTY)
      .deleteMany({productId: new ObjectId(productId)}),
  ]);
};

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
      await deleteProductDependentDocuments(args.id, context);
      return product;
    },
    async createOrUpdateProduct(obj, args, context) {
      let result;
      const properties = args.product.properties;
      delete args.product.properties;
      const product = await getProductById(context, args.product._id);
      if (!product) {
        result = await insertDocument(args.product, Collection.PRODUCT, context);
      } else {
        await getCollection(context, Collection.PRODUCT_PROPERTY)
          .deleteMany({productId: new ObjectId(args.product._id)});
        result = await updateProduct(args.product, context);
      }
      properties.forEach(el => el.productId = result._id);
      await insertManyDocuments(properties, Collection.PRODUCT_PROPERTY, context);
      return result;
    },
    async addComment(obj, args, context) {
      args.comment.productId = new ObjectId(args.id);
      return await insertDocument(args.comment, Collection.COMMENT, context);
    },
    async updateAmount(obj, args, context) {
      const result = await getCollection(context, Collection.PRODUCT).findOneAndUpdate(
        {_id: new ObjectId(args.id)},
        {$set: {quantity: args.amount}},
        {returnOriginal: false},
      );
      return result.value;
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
