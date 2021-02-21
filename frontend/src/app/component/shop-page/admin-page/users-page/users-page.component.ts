import {Component, OnInit} from '@angular/core';
import {User} from '../../../../shared/model/user.model';
import {UserService} from '../../../../shared/service/http/user.service';
import {MatDialog} from '@angular/material/dialog';
import {AddUserDialogComponent} from './add-user-dialog/add-user-dialog.component';
import {ReportService} from '../../../../shared/service/report.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styles: [],
})
export class UsersPageComponent implements OnInit {

  users: User[] = [];

  readonly columns = ['nick', 'name', 'email', 'createdAt', 'action'];

  constructor(
    private userService: UserService,
    private reportService: ReportService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.fetchUserList();
  }

  openAddUserDialog() {
    const dialogRef = this.dialog.open(AddUserDialogComponent, {width: '400px'});
    dialogRef.afterClosed().subscribe(val => this.createUser(val));
  }

  deleteUser(id: string, username: string) {
    this.userService.deleteUser(id)
      .then(() => this.fetchUserList())
      .then(() => this.reportService.showUserInfo(`Usunięto użytkownika: ${username}`));
  }

  private createUser(user: User) {
    this.userService.createUser(user)
      .then(() => this.fetchUserList())
      .then(() => this.reportService.showUserInfo('Dodano nowego użytkownika'));
  }

  private fetchUserList(): Promise<any> {
    return this.userService.getUserList()
      .then(res => this.users = res.content)
      .catch(err => console.error(err));
  }
}
