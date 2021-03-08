import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthorizationService} from '../authorization.service';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {

  constructor(
    private authorizationService: AuthorizationService,
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Authorization: this.authorizationService.getUserToken(),
      },
    });
    return next.handle(req);
  }
}
