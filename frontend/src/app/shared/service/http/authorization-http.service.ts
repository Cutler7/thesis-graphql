import {Injectable} from '@angular/core';
import {gql, GraphqlService} from './graphql.service';
import {Credentials} from '../../interface/credentials.interface';
import {UserSession} from '../authorization.service';

const GQL_LOGIN = gql`
  query($var1: Credentials!) {
    login(credentials: $var1) {
      token
      user {
        username
      }
    }
  }
`;

@Injectable({providedIn: 'root'})
export class AuthorizationHttpService extends GraphqlService {

  login(credentials: Credentials): Promise<UserSession> {
    return this.execute(GQL_LOGIN, 'login', credentials);
  }
}
