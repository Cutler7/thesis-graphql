import {ResolverMap} from '../interface/resolver-map.interface';
import {getCollection} from '../util/get-collection.util';
import {Collection} from '../enum/collection.enum';
import {getPageOfData} from '../util/get-page-of-data.util';
import {ResolverContext} from '../interface/resolver-context.interface';
import {ObjectId} from 'mongodb';
import {insertDocument} from '../util/insert-document.util';
import {insertManyDocuments} from '../util/insert-many-documents.util';
import {filterListData} from '../util/filter-list-data.util';
import {sortListData} from '../util/sort-list-data.util';

const getOrderById = (ctx: ResolverContext, id: string) => getCollection(ctx, Collection.ORDER)
  .findOne({_id: new ObjectId(id)});

const getLastId = async (ctx: ResolverContext) => await getCollection(ctx, Collection.ORDER)
  .find()
  .sort({orderNo: -1})
  .limit(1)
  .toArray();

const initializeOrderFields = (order, lastId: number): any[] => {
  const items = order.products;
  delete order.products;
  order.paid = false;
  order.status = 'PENDING';
  order.orderNo = (lastId + 1).toString().padStart(5, '0');
  return items;
};

export const orderResolvers: ResolverMap = {
  Query: {
    async orderList(obj, args, context) {
      if (!context.isAuthorized) return null;
      let orders = await getCollection(context, Collection.ORDER)
        .find({})
        .toArray();
      orders = filterListData(orders, args.queryArgs.filterArgs);
      orders = sortListData(orders, args.queryArgs.orderBy);
      return getPageOfData(orders, args.queryArgs.page, args.queryArgs.pageSize);
    },
    async getOrder(obj, args, context) {
      if (!context.isAuthorized) return null;
      return await getOrderById(context, args.id);
    },
  },
  Mutation: {
    async createOrder(obj, args, context) {
      const lastId = await getLastId(context);
      const items = initializeOrderFields(args.order, Number(lastId[0].orderNo));
      const result = await insertDocument(args.order, Collection.ORDER, context);
      items.forEach(el => el.orderId = result._id);
      items.forEach(el => el.productId = new ObjectId(el.productId));
      await insertManyDocuments(items, Collection.ORDER_ITEM, context);
      return result;
    },
    async changeOrderStatus(obj, args, context) {
      if (!context.isAuthorized) return null;
      const result = await getCollection(context, Collection.ORDER).findOneAndUpdate(
        {_id: new ObjectId(args.id)},
        {$set: {status: args.status}},
        {returnOriginal: false},
      );
      return result.value;
    },
    async payForOrder(obj, args, context) {
      const result = await getCollection(context, Collection.ORDER).findOneAndUpdate(
        {_id: new ObjectId(args.id)},
        {$set: {paid: true}},
        {returnOriginal: false},
      );
      return result.value;
    },
  },
  Order: {
    async products(obj, args, context) {
      return await getCollection(context, Collection.ORDER_ITEM)
        .find({orderId: obj._id})
        .toArray();
    },
  },
  OrderItem: {
    async product(obj, args, context) {
      return await getCollection(context, Collection.PRODUCT)
        .findOne({_id: obj.productId});
    },
  },
};
