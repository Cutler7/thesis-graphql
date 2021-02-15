import {Injectable} from '@angular/core';
import {Product} from '../model/product.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {BrowserStoredService} from './browser-stored.service';

export interface CartItem {
  product: Product;
  count: number;
}

@Injectable({providedIn: 'root'})
export class ShoppingCartService extends BrowserStoredService<[string, CartItem][]> {

  private products = new BehaviorSubject<Map<string, CartItem>>(new Map());

  protected browserStorage: Storage = localStorage;

  protected readonly key = 'shoppingCart';

  constructor() {
    super();
    this.getFromCache();
  }

  getProductListObservable(): Observable<Map<string, CartItem>> {
    return this.products.asObservable();
  }

  addProduct(product: Product, count: number = 1) {
    this.withBrowserCache(() => {
      const foundItem = this.getProductList().get(product.id);
      if (foundItem) {
        foundItem.count += count;
      } else {
        this.getProductList().set(product.id, {product, count});
      }
    });
  }

  removeProduct(id: string) {
    this.withBrowserCache(() => this.getProductList().delete(id));
  }

  clearCart() {
    this.withBrowserCache(() => this.getProductList().clear());
  }

  protected init(data: [string, CartItem][]): void {
    this.products.next(new Map(data));
  }

  protected store(): [string, CartItem][] {
    this.products.next(this.getProductList());
    return Array.from(this.getProductList());
  }

  private getProductList(): Map<string, CartItem> {
    return this.products.getValue();
  }
}
