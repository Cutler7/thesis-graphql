import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InputType} from '../../../../shared/enum/input.type';
import {ReportService} from '../../../../shared/service/report.service';

@Component({
  selector: 'app-add-comment-dialog',
  templateUrl: './add-comment-dialog.component.html',
  styles: [],
})
export class AddCommentDialogComponent implements OnInit {

  InputType = InputType;

  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<AddCommentDialogComponent>,
    private reportService: ReportService,
  ) {
  }

  ngOnInit(): void {
    this.prepareFormGroup();
  }

  addComment() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    } else {
      this.reportService.showUserInfo('Popraw błędne dane');
    }
  }

  private prepareFormGroup() {
    this.form = new FormGroup({
      author: new FormControl('', [Validators.required]),
      rate: new FormControl(3, [Validators.required]),
      content: new FormControl('', [Validators.required]),
    });
  }
}
