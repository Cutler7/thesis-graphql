import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({providedIn: 'root'})
export class ReportService {

  constructor(private _snackBar: MatSnackBar) {
  }

  showUserInfo(message: string) {
    this._snackBar.open(message, 'Zamknij', {duration: 5000});
  }
}
