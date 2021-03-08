import {random, range} from 'lodash';
import {PRODUCT_DATA} from './product.data';
import bcrypt from 'bcrypt';

const addCreatedAtField = (...collection: any[][]) => collection
  .forEach(col => col.forEach(el => el.createdAt = new Date()));

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

export const users = [
  {
    username: 'admin',
    password: bcrypt.hashSync('admin', 10),
  },
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
  phone: '123456789',
  street: 'Wąska',
  houseNumber: '2',
  apartmentNumber: '6',
  city: 'Szczecin',
  postalCode: '70-222',
};

export const orders = [];
export const properties = [];
PRODUCT_DATA.forEach(product => properties.push(...product.properties));

range(100).forEach((el, i) => {
  const delivery = ['PACKAGE', 'PARCEL_LOCKER', 'POST'];
  const status = ['PENDING', 'WORKING', 'DONE', 'REJECTED', 'COMPLAINT'];
  const result: any = {...addressData};
  result.orderNo = i.toString().padStart(5, '0');
  result.delivery = delivery[random(2)];
  result.status = status[random(4)];
  result.paid = !(result.status === 'PENDING');
  orders.push(result);
});
addCreatedAtField(PRODUCT_DATA, properties, comments, users, orders);
