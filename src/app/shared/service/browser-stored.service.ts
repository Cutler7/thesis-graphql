import {Injectable} from '@angular/core';

/**
 * Base class for services storing data in browser cache
 */
@Injectable()
export abstract class BrowserStoredService<T> {

  /**
   * Property that defines storage key
   */
  protected abstract readonly key: string;

  /**
   * Override this property to change default store type
   */
  protected readonly browserStorage: Storage = sessionStorage;

  /**
   * Use this method to save service state after execution
   */
  protected withBrowserCache<R>(fn: () => R): R {
    const result = fn();
    this.browserStorage.setItem(this.key, JSON.stringify(this.store()));
    return result;
  }

  /**
   * Initialize service with data. Do it manually in the constructor
   */
  protected getFromCache() {
    const data = this.browserStorage.getItem(this.key);
    if (data) {
      this.init(JSON.parse(data) as T);
    }
  }

  /**
   * Method that defines how to initialize service with data from storage
   */
  protected abstract init(data: T): void;

  /**
   * Method that returns service state you want to save
   */
  protected abstract store(): T;
}
