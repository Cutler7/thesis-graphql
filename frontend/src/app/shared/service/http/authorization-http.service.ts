import {Injectable} from '@angular/core';
import {gql, GraphqlService} from './graphql.service';
import {Order} from '../../model/order.model';
import {Credentials} from '../../interface/credentials.interface';

const GQL_LOGIN = gql`
`;

@Injectable({providedIn: 'root'})
export class AuthorizationHttpService extends GraphqlService {

  login(credentials: Credentials): Promise<Order> {
    return this.execute(GQL_LOGIN, 'login', credentials);
  }
}
