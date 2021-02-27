import {gql, GraphqlService} from './graphql.service';
import {Injectable} from '@angular/core';
import {QueryListArgs} from '../../interface/query-list-args.interface';
import {PageResponse} from '../../interface/page-response.interface';
import {Order} from '../../model/order.model';

const GQL_ORDER_LIST = gql`
  query {
    orderList {
      pageSize
      page
      totalRecords
      content {
        _id
        createdAt
        orderNo
        status
        paid
        products {
          amount
          product {
            price
          }
        }
      }
    }
  }
`;

const GQL_ORDER_BY_ID = gql`
`;

const GQL_CREATE_ORDER = gql`
`;

const GQL_CHANGE_ORDER_STATUS = gql`
`;

@Injectable({providedIn: 'root'})
export class OrderService extends GraphqlService {

  getOrderList(args: QueryListArgs = {}): Promise<PageResponse<Order>> {
    return this.execute(GQL_ORDER_LIST, 'orderList', args);
  }

  getOrderById(id: string): Promise<Order> {
    return this.execute(GQL_ORDER_BY_ID, 'getOrder', id);
  }

  createOrder(order: Order): Promise<Order> {
    return this.execute(GQL_CREATE_ORDER, 'createOrder', order);
  }

  changeOrderStatus(id: string, status: string): Promise<Order> {
    return this.execute(GQL_CHANGE_ORDER_STATUS, 'changeOrderStatus', id, status);
  }
}
