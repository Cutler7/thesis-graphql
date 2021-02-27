import {Injectable} from '@angular/core';
import {User} from '../model/user.model';
import {Credentials} from '../interface/credentials.interface';
import {BrowserStoredService} from './browser-stored.service';
import {AuthorizationHttpService} from './http/authorization-http.service';

export interface UserSession {
  user: User;
  token: string;
}

@Injectable({providedIn: 'root'})
export class AuthorizationService extends BrowserStoredService<UserSession> {

  private activeUser: User;

  private token: string;

  protected readonly key = 'userSession';

  constructor(
    private authorizationHttpService: AuthorizationHttpService,
  ) {
    super();
    this.getFromCache();
  }

  isUserLoggedIn(): boolean {
    return !!this.activeUser?.username;
  }

  getActiveUser(): User {
    return this.activeUser;
  }

  getUserToken(): string {
    return this.token;
  }

  login(credentials: Credentials): Promise<void> {
    return this.authorizationHttpService.login(credentials)
      .then(res => this.withBrowserCache(() => {
        this.activeUser = new User(res.user);
        this.token = res.token;
      }));
  }

  logout() {
    this.withBrowserCache(() => {
      this.activeUser = null;
      this.token = null;
    });
  }

  protected init(data: UserSession): void {
    this.activeUser = new User(data.user);
    this.token = data.token;
  }

  protected store(): UserSession {
    return {user: this.activeUser, token: this.token};
  }
}
