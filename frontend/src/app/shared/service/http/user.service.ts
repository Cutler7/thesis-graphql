import {Injectable} from '@angular/core';
import {User} from '../../model/user.model';

@Injectable({providedIn: 'root'})
export class UserService {

  private data: User[] = [
    {
      id: '1',
      username: 'jkowalski',
      name: 'Jan',
      surname: 'Kowalski',
      email: 'jkowalski@mail.com',
      createdAt: new Date,
    },
    {id: '1', username: 'mnowak', name: 'Marek', surname: 'Nowak', email: 'mnowak@mail.com', createdAt: new Date},
    {
      id: '1',
      username: 'kmalinowski',
      name: 'Krzysztof',
      surname: 'Malinowski',
      email: 'kmalinowski@mail.com',
      createdAt: new Date,
    },
    {
      id: '1',
      username: 'jzielinska',
      name: 'Jadwiga',
      surname: 'Zielińska',
      email: 'jzielinska@mail.com',
      createdAt: new Date,
    },
    {
      id: '1',
      username: 'mwojciechowska',
      name: 'Marta',
      surname: 'Wojciechowska',
      email: 'mwojciechowska@mail.com',
      createdAt: new Date,
    },
  ] as User[];

  getUserList(): Promise<User[]> {
    return Promise.resolve(this.data);
  }
}
