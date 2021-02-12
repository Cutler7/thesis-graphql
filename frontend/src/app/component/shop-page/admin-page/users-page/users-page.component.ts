import {Component, OnInit} from '@angular/core';
import {User} from '../../../../shared/model/user.model';
import {UserService} from '../../../../shared/service/http/user.service';
import {MatDialog} from '@angular/material/dialog';
import {AddUserDialogComponent} from './add-user-dialog/add-user-dialog.component';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styles: [],
})
export class UsersPageComponent implements OnInit {

  users: User[] = [];

  columns: string[] = ['nick', 'name', 'email', 'createdAt', 'action'];

  constructor(
    private userService: UserService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.userService.getUserList()
      .then(res => this.users = res);
  }

  openAddUserDialog() {
    const dialogRef = this.dialog.open(AddUserDialogComponent, {width: '400px'});
    dialogRef.afterClosed().subscribe(val => console.log(val));
  }

  deleteUser(id: number) {

  }
}
