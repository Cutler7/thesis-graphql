import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ProductService {

  private data = [
    {id: 1, name: 'Produkt A', price: 10},
    {id: 2, name: 'Produkt B', price: 20},
    {id: 3, name: 'Produkt C', price: 30},
    {id: 4, name: 'Produkt D', price: 40},
    {id: 5, name: 'Produkt E', price: 50},
    {id: 6, name: 'Produkt F', price: 60},
    {id: 7, name: 'Produkt A', price: 10},
    {id: 8, name: 'Produkt B', price: 20},
    {id: 9, name: 'Produkt C', price: 30},
    {id: 10, name: 'Produkt D', price: 40},
    {id: 11, name: 'Produkt E', price: 50},
    {id: 12, name: 'Produkt F', price: 60},
    {id: 13, name: 'Produkt A', price: 10},
    {id: 14, name: 'Produkt B', price: 20},
    {id: 15, name: 'Produkt C', price: 30},
    {id: 16, name: 'Produkt D', price: 40},
    {id: 17, name: 'Produkt E', price: 50},
    {id: 18, name: 'Produkt F', price: 60},
    {id: 19, name: 'Produkt A', price: 10},
    {id: 20, name: 'Produkt B', price: 20},
  ];

  getProductList(): Promise<any[]> {
    return Promise.resolve(this.data);
  }

  getProductById(id: number): Promise<any> {
    return Promise.resolve(this.data.find(el => el.id === id));
  }
}
