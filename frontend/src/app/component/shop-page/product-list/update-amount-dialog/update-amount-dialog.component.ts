import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {InputType} from 'src/app/shared/enum/input.type';
import {ReportService} from '../../../../shared/service/report.service';

@Component({
  selector: 'app-update-amount-dialog',
  templateUrl: './update-amount-dialog.component.html',
  styles: [],
})
export class UpdateAmountDialogComponent implements OnInit {

  InputType = InputType;

  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) private amount: string,
    private dialogRef: MatDialogRef<UpdateAmountDialogComponent>,
    private reportService: ReportService,
  ) {
  }

  ngOnInit(): void {
    this.prepareFormGroup();
  }

  addUser() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
      this.reportService.showUserInfo('Utworzono nowego użytkownika');
    } else {
      this.reportService.showUserInfo('Popraw błędne dane');
    }
  }

  private prepareFormGroup() {
    this.form = new FormGroup({
      amount: new FormControl(this.amount, [Validators.required, Validators.min(0)]),
    });
  }

  updateAmount() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value?.amount);
    }
  }
}
