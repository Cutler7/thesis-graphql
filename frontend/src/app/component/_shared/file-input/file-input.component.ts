import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

type FileInputCallback = (file: File) => void;

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileInputComponent),
      multi: true,
    },
  ],
})
export class FileInputComponent implements ControlValueAccessor {

  value: File;

  disabled: boolean;

  onChange: FileInputCallback = () => null;

  onTouch: FileInputCallback = () => null;

  registerOnChange(fn: FileInputCallback): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: FileInputCallback): void {
    this.onTouch = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  writeValue(file: File): void {
    this.value = file;
  }

  handleFileChange(event: Event) {
    const value = (event.target as HTMLInputElement)?.files[0];
    this.onChange(value);
    this.onTouch(value);
    this.value = value;
  }
}
