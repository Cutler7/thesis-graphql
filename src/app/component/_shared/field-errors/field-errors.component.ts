import {AfterContentInit, Component, Input} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-field-errors',
  templateUrl: './field-errors.component.html',
  styles: [],
})
export class FieldErrorsComponent implements AfterContentInit {

  @Input()
  fieldRef: AbstractControl | null;

  constructor() {
  }

  ngAfterContentInit() {
  }

}
