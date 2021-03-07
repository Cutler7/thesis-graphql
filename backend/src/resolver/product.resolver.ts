import {ResolverMap} from '../interface/resolver-map.interface';
import {Collection} from '../enum/collection.enum';
import {getPageOfData} from '../util/get-page-of-data.util';
import {getCollection} from '../util/get-collection.util';
import {Binary, ObjectId} from 'mongodb';
import {ResolverContext} from '../interface/resolver-context.interface';
import {insertDocument} from '../util/insert-document.util';
import {insertManyDocuments} from '../util/insert-many-documents.util';
import {filterListData} from '../util/filter-list-data.util';
import {sortListData} from '../util/sort-list-data.util';
import {GraphQLUpload} from 'graphql-upload';

const getProductById = (ctx: ResolverContext, id: string) => getCollection(ctx, Collection.PRODUCT)
  .findOne({_id: new ObjectId(id)});

const isProductExist = async (ctx: ResolverContext, id: string): Promise<boolean> =>
  !id ? false : !!(await getProductById(ctx, id));


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

const readStream = (stream) => {
  return new Promise((resolve, reject) => {
    const buff = [];
    stream.on('data', chunk => buff.push(chunk));
    stream.on('end', () => resolve(Buffer.concat(buff)));
    stream.on('error', error => reject(error));
    stream.read();
  });
};

export const productResolvers: ResolverMap = {
  Query: {
    async productList(obj, args, context) {
      let products = await getCollection(context, Collection.PRODUCT)
        .find({})
        .toArray();
      products = filterListData(products, args.queryArgs.filterArgs);
      products = sortListData(products, args.queryArgs.orderBy);
      return getPageOfData(products, args.queryArgs.page, args.queryArgs.pageSize);
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
      const file = await args.file.then();
      const buff: any = await readStream(file.createReadStream());
      args.product.img = new Binary(buff);

      const properties = args.product.properties;
      delete args.product.properties;
      const productExists = await isProductExist(context, args.product._id);
      if (!productExists) {
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
  Upload: GraphQLUpload,
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
