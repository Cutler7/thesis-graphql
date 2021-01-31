import {Injectable} from '@angular/core';
import {Product} from '../model/product.model';
import {BehaviorSubject, Observable} from 'rxjs';

export interface CartItem {
  product: Product;
  count: number;
}

@Injectable({providedIn: 'root'})
export class ShoppingCartService {

  private products = new BehaviorSubject<Map<number, CartItem>>(new Map());

  private readonly key = 'shoppingCart';

  constructor() {
    this.getFromCache();
  }

  addProduct(product: Product, count: number = 1) {
    const foundItem = this.getProductList().get(product.id);
    if (foundItem) {
      foundItem.count += count;
    } else {
      this.getProductList().set(product.id, {product, count});
    }
    this.cacheValue();
  }

  getProductListObservable(): Observable<Map<number, CartItem>> {
    return this.products.asObservable();
  }

  removeProduct(id: number) {
    this.getProductList().delete(id);
    this.cacheValue();
  }

  clearCart() {
    this.getProductList().clear();
    this.cacheValue();
  }

  private getProductList(): Map<number, CartItem> {
    return this.products.getValue();
  }

  private cacheValue() {
    sessionStorage.setItem(this.key, JSON.stringify(Array.from(this.getProductList())));
    this.products.next(this.getProductList());
  }

  private getFromCache() {
    const savedCart = sessionStorage.getItem(this.key);
    if (savedCart) {
      this.products.next(new Map(JSON.parse(savedCart)));
    }
  }
}
