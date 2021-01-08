import {Injectable} from '@angular/core';
import {User} from '../model/user.model';
import {Credentials} from '../interface/credentials.interface';

@Injectable({providedIn: 'root'})
export class AuthorizationService {

  private activeUser: User;

  isUserLoggedIn(): boolean {
    return !!this.activeUser;
  }

  login(credentials: Credentials): Promise<void> {
    if (credentials.username === 'admin') {
      this.activeUser = new User();
      return Promise.resolve();
    }
    return Promise.reject();
  }

  logout() {
    this.activeUser = null;
  }
}
