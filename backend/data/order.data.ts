import {random, range} from 'lodash';

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
