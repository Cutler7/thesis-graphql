import {Injectable} from '@angular/core';
import {User} from '../../model/user.model';

@Injectable({providedIn: 'root'})
export class UserService {

  private data: User[] = [
    {id: 1, username: 'jkowalski', name: 'Jan', surname: 'Kowalski', createdAt: new Date},
    {id: 1, username: 'mnowak', name: 'Marek', surname: 'Nowak', createdAt: new Date},
    {id: 1, username: 'kmalinowski', name: 'Krzysztof', surname: 'Malinowski', createdAt: new Date},
    {id: 1, username: 'jzielinska', name: 'Jadwiga', surname: 'Zielińska', createdAt: new Date},
    {id: 1, username: 'mwojciechowska', name: 'Marta', surname: 'Wojciechowska', createdAt: new Date},
  ] as User[];

  getUserList(): Promise<User[]> {
    return Promise.resolve(this.data);
  }
}
