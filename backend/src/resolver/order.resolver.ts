import {ResolverMap} from '../interface/resolver-map.interface';

export const orderResolvers: ResolverMap = {
  Query: {
    async orderList(obj, args, context) {
      return [];
    },
    async getOrder(obj, args, context) {
      return [];
    },
  },
  Mutation: {
    async createOrder(obj, args, context) {
      return [];
    },
    async changeOrderStatus(obj, args, context) {
      return [];
    },
  },
};
