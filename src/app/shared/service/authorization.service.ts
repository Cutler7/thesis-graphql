import {Injectable} from '@angular/core';
import {User} from '../model/user.model';

@Injectable({providedIn: 'root'})
export class AuthorizationService {

  private activeUser: User;

  login() {
    this.activeUser = new User();
  }

  logout() {
    this.activeUser = null;
  }
}
