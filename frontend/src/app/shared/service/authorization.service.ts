import {Injectable} from '@angular/core';
import {User} from '../model/user.model';
import {Credentials} from '../interface/credentials.interface';
import {BrowserStoredService} from './browser-stored.service';

export interface UserSession {
  user: User;
  token: string;
}

@Injectable({providedIn: 'root'})
export class AuthorizationService extends BrowserStoredService<UserSession> {

  private activeUser: User;

  private token: string;

  protected readonly key = 'userSession';

  constructor() {
    super();
    this.getFromCache();
  }

  isUserLoggedIn(): boolean {
    return !!this.activeUser;
  }

  login(credentials: Credentials): Promise<void> {
    return this.withBrowserCache(() => {
      if (credentials.username === 'admin') {
        this.createUser(credentials.username);
        this.token = 'XYZ';
        return Promise.resolve();
      }
      return Promise.reject();
    });
  }

  logout() {
    this.withBrowserCache(() => {
      this.activeUser = null;
      this.token = null;
    });
  }

  private createUser(username: string) {
    this.activeUser = new User({
      username,
      name: 'George',
      surname: 'George',
    } as User);
  }

  protected init(data: UserSession): void {
    this.activeUser = new User(data);
    this.token = data.token;
  }

  protected store(): UserSession {
    return {user: this.activeUser, token: this.token};
  }
}
