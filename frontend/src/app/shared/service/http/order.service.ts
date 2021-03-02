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
  query ($var1: ID!) {
    getOrder(id: $var1) {
      _id
      createdAt
      orderNo
      name
      surname
      email
      phone
      street
      houseNumber
      apartmentNumber
      postalCode
      city
      delivery
      status
      paid
      products {
        amount
        product {
          name
          price
        }
      }
    }
  }
`;

const GQL_CREATE_ORDER = gql`
  mutation ($var1: OrderInput!) {
    createOrder(order: $var1) {
      _id
      orderNo
    }
  }

`;

const GQL_CHANGE_ORDER_STATUS = gql`
  mutation ($var1: ID!, $var2: String) {
    changeOrderStatus(id: $var1, status: $var2) {
      _id
      status
    }
  }
`;

const GQL_PAY_FOR_ORDER = gql`
  mutation ($var1: ID!) {
    payForOrder(id: $var1) {
      _id
      paid
      orderNo
    }
  }
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

  payForOrder(id: string): Promise<Order> {
    return this.execute(GQL_PAY_FOR_ORDER, 'payForOrder', id);
  }
}
