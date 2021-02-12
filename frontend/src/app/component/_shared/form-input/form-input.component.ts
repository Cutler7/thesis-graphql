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

  private readonly supportedTypes = [
    InputType.TEXT,
    InputType.NUMBER,
    InputType.PASSWORD,
    InputType.DROPDOWN,
    InputType.TEXTAREA,
  ];

  formFieldSupported(): boolean {
    return this.supportedTypes.includes(this.inputType);
  }

  isFieldRequired(): boolean {
    const validation = this.fieldRef?.validator?.({} as AbstractControl);
    return validation?.required;
  }

  getTriggerLabel(): string {
    const labelField = this.fieldConfig.labelField;
    const value = this.fieldRef.value || [];
    return labelField ? value.map(el => el[labelField]).join() : value.join();
  }
}
