import {Injectable} from '@angular/core';
import {Product} from '../../model/product.model';
import {QueryListArgs} from '../../interface/query-list-args.interface';
import {PageResponse} from '../../interface/page-response.interface';
import {gql, GraphqlService} from './graphql.service';

const GQL_PRODUCT_LIST = gql`
  {
    productList {
      id
      name
      price
    }
  }
`;

const GQL_PRODUCT_BY_ID = gql`
  query($var1: ID!) {
    getProduct(id: $var1) {
      id
      name
      description
      price
      properties {
        name
        value
      }
      comments {
        author
        content
        createdAt
        rate
      }
    }
  }
`;

const GQL_DELETE_PRODUCT = gql`
`;

const GQL_CREATE_OR_UPDATE_PRODUCT = gql`
`;

const GQL_ADD_COMMENT = gql`
`;

const GQL_UPDATE_AMOUNT = gql`
`;

@Injectable({providedIn: 'root'})
export class ProductService extends GraphqlService {

  getProductList(args: QueryListArgs = {}): Promise<PageResponse<Product>> {
    return this.execute(GQL_PRODUCT_LIST, 'productList', args);
  }

  getProductById(id: string): Promise<Product> {
    return this.execute<Product>(GQL_PRODUCT_BY_ID, 'getProduct', id);
  }

  deleteProduct(id: string): Promise<Product> {
    return this.execute<Product>(GQL_DELETE_PRODUCT, 'deleteProduct', id);
  }

  createOrUpdateProduct(product: Product): Promise<Product> {
    return this.execute<Product>(GQL_CREATE_OR_UPDATE_PRODUCT, 'createOrUpdateProduct', product);
  }

  addComment(id: string, comment: Comment): Promise<Comment> {
    return this.execute<Comment>(GQL_ADD_COMMENT, 'addComment', id, comment);
  }

  updateAmount(id: string, amount: number): Promise<Product> {
    return this.execute<Product>(GQL_UPDATE_AMOUNT, 'updateAmount', id, amount);
  }
}
