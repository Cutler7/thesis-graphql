import bcrypt from 'bcrypt';

const standardPassword = bcrypt.hashSync('admin', 10);

export const users = [
  {
    username: 'admin',
    password: standardPassword,
  },
  {
    username: 'jkowalski',
    name: 'Jan',
    surname: 'Kowalski',
    email: 'jkowalski@mail.com',
    password: standardPassword,
  },
  {
    username: 'mnowak',
    name: 'Marek',
    surname: 'Nowak',
    email: 'mnowak@mail.com',
    password: standardPassword,
  },
  {
    username: 'kmalinowski',
    name: 'Krzysztof',
    surname: 'Malinowski',
    email: 'kmalinowski@mail.com',
    password: standardPassword,
  },
  {
    username: 'jzielinska',
    name: 'Jadwiga',
    surname: 'Zielińska',
    email: 'jzielinska@mail.com',
    password: standardPassword,
  },
  {
    username: 'mwojciechowska',
    name: 'Marta',
    surname: 'Wojciechowska',
    email: 'mwojciechowska@mail.com',
    password: standardPassword,
  },
];
