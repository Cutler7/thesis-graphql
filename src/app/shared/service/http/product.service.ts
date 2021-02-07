import {Injectable} from '@angular/core';
import {Product} from '../../model/product.model';

@Injectable({providedIn: 'root'})
export class ProductService {

  private dataProps: { name: string, value: string }[] = [
    {name: 'wysokość', value: 'do 40cm'},
    {name: 'stanowisko', value: 'słoneczne'},
    {name: 'podlewanie', value: '2 razy w tygodniu'},
    {name: 'podłoże', value: 'torfowe'},
  ];

  private description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam enim dui, pharetra ac posuere ut, egestas ut tortor. Nam malesuada sapien et mollis aliquam. Nam placerat urna vitae justo scelerisque dictum. In vitae metus quis arcu pellentesque ultrices. Maecenas venenatis metus arcu, non pretium lorem convallis a. Nulla mattis ipsum in mi faucibus fermentum a quis ligula. Pellentesque faucibus vulputate tempus. Mauris est arcu, vulputate vitae pretium blandit, rutrum at orci. Nulla eleifend nulla eget erat placerat, non mollis est mattis. Nunc sed consectetur ligula, id aliquam arcu. Sed purus sem, ultrices at orci non, tempus rutrum elit. Vivamus molestie blandit suscipit.';

  private data: Product[] = [
    {id: 1, name: 'Produkt A', description: 'ABCDEF', price: 10},
    {id: 2, name: 'Produkt B', description: null, price: 20},
    {id: 3, name: 'Produkt C', description: 'ABCDEF', price: 30},
    {id: 4, name: 'Produkt D', description: null, price: 40},
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
  ] as Product[];

  constructor() {
    this.data.forEach(el => {
      el.properties = this.dataProps;
      el.description = this.description;
    });
  }

  getProductList(): Promise<Product[]> {
    return Promise.resolve(this.data);
  }

  getProductById(id: number): Promise<Product> {
    return Promise.resolve(this.data.find(el => el.id === id));
  }
}
