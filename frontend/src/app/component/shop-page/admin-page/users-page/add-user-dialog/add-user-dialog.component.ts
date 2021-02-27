import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {ReportService} from '../../../../../shared/service/report.service';
import {InputType} from 'src/app/shared/enum/input.type';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styles: [],
})
export class AddUserDialogComponent implements OnInit {

  InputType = InputType;

  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<AddUserDialogComponent>,
    private reportService: ReportService,
  ) {
  }

  ngOnInit(): void {
    this.prepareFormGroup();
  }

  addUser() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    } else {
      this.reportService.showUserInfo('Popraw błędne dane');
    }
  }

  private prepareFormGroup() {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }
}
