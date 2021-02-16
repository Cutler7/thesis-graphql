import {Injectable} from '@angular/core';
import {gql, GraphqlService} from './graphql.service';
import {QueryListArgs} from '../../interface/query-list-args.interface';
import {PageResponse} from '../../interface/page-response.interface';
import {User} from '../../model/user.model';

const GQL_USER_LIST = gql`
  {
    userList {
      id
      createdAt
      username
      name
      surname
      password
      email
    }
  }
`;

const GQL_CREATE_USER = gql`
`;

const GQL_DELETE_USER = gql`
`;

@Injectable({providedIn: 'root'})
export class UserService extends GraphqlService {

  getUserList(args: QueryListArgs = {}): Promise<PageResponse<User>> {
    return this.execute(GQL_USER_LIST, 'userList', args);
  }

  createUser(user: User): Promise<User> {
    return this.execute(GQL_CREATE_USER, 'createUser', user);
  }

  deleteUser(id: string): Promise<User> {
    return this.execute(GQL_DELETE_USER, 'deleteUser', id);
  }
}
