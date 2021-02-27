import {range} from 'lodash';

const addCreatedAtField = (...collection: any[][]) => collection
  .forEach(col => col.forEach(el => el.createdAt = new Date()));

export const dataProps = [
  {name: 'wysokość', value: 'do 40cm'},
  {name: 'stanowisko', value: 'słoneczne'},
  {name: 'podlewanie', value: '2 razy w tygodniu'},
  {name: 'podłoże', value: 'torfowe'},
];

export const comments = [
  {
    rate: 1,
    author: 'Janusz',
    content: 'bardzo ładne kwiaty mają państwo bardzo ładne kwiaty mają państwo bardzo ładne kwiaty mają państwo bardzo ładne kwiaty mają państwo bardzo ładne kwiaty mają państwo',
  },
  {rate: 2, author: 'Grażynka', content: 'bardzo ładne kwiaty mają państwo'},
  {rate: 3, author: 'Janusz', content: 'bardzo ładne kwiaty mają państwo'},
  {rate: 4, author: 'Grażynka', content: 'bardzo ładne kwiaty mają państwo'},
  {rate: 5, author: 'Janusz', content: 'bardzo ładne kwiaty mają państwo'},
];

export const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam enim dui, pharetra ac posuere ut, egestas ut tortor. Nam malesuada sapien et mollis aliquam. Nam placerat urna vitae justo scelerisque dictum. In vitae metus quis arcu pellentesque ultrices. Maecenas venenatis metus arcu, non pretium lorem convallis a. Nulla mattis ipsum in mi faucibus fermentum a quis ligula. Pellentesque faucibus vulputate tempus. Mauris est arcu, vulputate vitae pretium blandit, rutrum at orci. Nulla eleifend nulla eget erat placerat, non mollis est mattis. Nunc sed consectetur ligula, id aliquam arcu. Sed purus sem, ultrices at orci non, tempus rutrum elit. Vivamus molestie blandit suscipit.';

export const products: any[] = [
  {name: 'Produkt A', price: 10, quantity: 100},
  {name: 'Produkt B', price: 20, quantity: 150},
  {name: 'Produkt C', price: 30, quantity: 0},
  {name: 'Produkt D', price: 40, quantity: 0},
  {name: 'Produkt E', price: 50, quantity: 100},
  {name: 'Produkt F', price: 60, quantity: 100},
  {name: 'Produkt A', price: 10, quantity: 150},
  {name: 'Produkt B', price: 20, quantity: 200},
  {name: 'Produkt C', price: 30, quantity: 300},
  {name: 'Produkt D', price: 40, quantity: 100},
  {name: 'Produkt E', price: 50, quantity: 900},
  {name: 'Produkt F', price: 60, quantity: 1},
  {name: 'Produkt A', price: 10, quantity: 8},
  {name: 'Produkt B', price: 20, quantity: 100},
  {name: 'Produkt C', price: 30, quantity: 100},
  {name: 'Produkt D', price: 40, quantity: 100},
  {name: 'Produkt E', price: 50, quantity: 100},
  {name: 'Produkt F', price: 60, quantity: 100},
  {name: 'Produkt A', price: 10, quantity: 100},
  {name: 'Produkt B', price: 20, quantity: 100},
];

products.forEach(el => {
  el.description = description;
});

export const users = [
  {
    username: 'jkowalski',
    name: 'Jan',
    surname: 'Kowalski',
    email: 'jkowalski@mail.com',
  },
  {
    username: 'mnowak',
    name: 'Marek',
    surname: 'Nowak',
    email: 'mnowak@mail.com',
  },
  {
    username: 'kmalinowski',
    name: 'Krzysztof',
    surname: 'Malinowski',
    email: 'kmalinowski@mail.com',
  },
  {
    username: 'jzielinska',
    name: 'Jadwiga',
    surname: 'Zielińska',
    email: 'jzielinska@mail.com',
  },
  {
    username: 'mwojciechowska',
    name: 'Marta',
    surname: 'Wojciechowska',
    email: 'mwojciechowska@mail.com',
  },
];

const addressData = {
  name: 'Jan',
  surname: 'Kowalski',
  email: 'test@mail.com',
  phone: '111-111-111',
  street: 'Wąska',
  houseNumber: '2',
  apartmentNumber: '6',
  city: 'Szczecin',
  postalCode: '70-222',
  delivery: 'PACZKA',
  status: 'PENDING',
  paid: false,
};

export const orders = [];

range(100).forEach((el, i) => {
  const result: any = {...addressData};
  result.orderNo = i.toString().padStart(5, '0');
  orders.push(result);
});
addCreatedAtField(dataProps, comments, products, users, orders);
