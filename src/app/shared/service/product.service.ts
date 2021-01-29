import {Injectable} from '@angular/core';
import {Product} from '../model/product.model';

@Injectable({providedIn: 'root'})
export class ProductService {

  private data: Product[] = [
    {id: 1, name: 'Produkt A', description: 'ABCDEF', price: 10},
    {id: 2, name: 'Produkt B', description: 'ABCDEF', price: 20},
    {id: 3, name: 'Produkt C', description: 'ABCDEF', price: 30},
    {id: 4, name: 'Produkt D', description: 'ABCDEF', price: 40},
    {id: 5, name: 'Produkt E', description: 'ABCDEF', price: 50},
    {id: 6, name: 'Produkt F', description: 'ABCDEF', price: 60},
    {id: 7, name: 'Produkt A', description: 'ABCDEF', price: 10},
    {id: 8, name: 'Produkt B', description: 'ABCDEF', price: 20},
    {id: 9, name: 'Produkt C', description: 'ABCDEF', price: 30},
    {id: 10, name: 'Produkt D', description: 'ABCDEF', price: 40},
    {id: 11, name: 'Produkt E', description: 'ABCDEF', price: 50},
    {id: 12, name: 'Produkt F', description: 'ABCDEF', price: 60},
    {id: 13, name: 'Produkt A', description: 'ABCDEF', price: 10},
    {id: 14, name: 'Produkt B', description: 'ABCDEF', price: 20},
    {id: 15, name: 'Produkt C', description: 'ABCDEF', price: 30},
    {id: 16, name: 'Produkt D', description: 'ABCDEF', price: 40},
    {id: 17, name: 'Produkt E', description: 'ABCDEF', price: 50},
    {id: 18, name: 'Produkt F', description: 'ABCDEF', price: 60},
    {id: 19, name: 'Produkt A', description: 'ABCDEF', price: 10},
    {id: 20, name: 'Produkt B', description: 'ABCDEF', price: 20},
  ];

  getProductList(): Promise<Product[]> {
    return Promise.resolve(this.data);
  }

  getProductById(id: number): Promise<Product> {
    return Promise.resolve(this.data.find(el => el.id === id));
  }
}
