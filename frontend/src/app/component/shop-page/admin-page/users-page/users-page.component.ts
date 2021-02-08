import {Component, OnInit} from '@angular/core';
import {User} from '../../../../shared/model/user.model';
import {UserService} from '../../../../shared/service/http/user.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styles: [],
})
export class UsersPageComponent implements OnInit {

  users: User[] = [];

  columns: string[] = ['nick', 'name', 'createdAt', 'action'];

  constructor(
    private userService: UserService,
  ) {
  }

  ngOnInit(): void {
    this.userService.getUserList()
      .then(res => this.users = res);
  }

  addUser() {

  }

  deleteUser(id: number) {

  }
}
