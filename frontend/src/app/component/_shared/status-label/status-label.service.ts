import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class StatusLabelService {

  private activeItemId = new BehaviorSubject<string>(null);

  getActiveItemObservable(): Observable<string> {
    return this.activeItemId.asObservable();
  }

  setActiveItem(id: string) {
    this.activeItemId.next(id);
  }
}
