import {Component, Input} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {InputType} from '../../../shared/enum/input.type';
import {FieldConfig} from './field.config.interface';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styles: [],
})
export class FormInputComponent {

  InputType = InputType;

  @Input()
  label: string;

  @Input()
  inputType: InputType = InputType.TEXT;

  @Input()
  fieldRef: AbstractControl;

  @Input()
  fieldConfig: Partial<FieldConfig>;

  log() {
    console.log(this.fieldRef);
  }

  formFieldSupported(): boolean {
    const supportedTypes = [InputType.TEXT, InputType.NUMBER, InputType.PASSWORD, InputType.DROPDOWN];
    return supportedTypes.includes(this.inputType);
  }
}
