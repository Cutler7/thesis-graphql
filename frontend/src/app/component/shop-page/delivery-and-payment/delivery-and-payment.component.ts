import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DELIVERY_METHOD} from 'src/app/shared/const/delivery-method.const';
import {RouteName} from '../../../shared/enum/route-name.enum';
import {InputType} from '../../../shared/enum/input.type';
import {ReportService} from '../../../shared/service/report.service';
import {CustomValidator} from '../../../shared/const/custom-validator';

@Component({
  selector: 'app-delivery-and-payment',
  templateUrl: './delivery-and-payment.component.html',
  styles: [],
})
export class DeliveryAndPaymentComponent implements OnInit {

  InputType = InputType;
  DELIVERY_METHOD = DELIVERY_METHOD;

  form: FormGroup;

  constructor(
    private reportService: ReportService,
  ) {
  }

  ngOnInit(): void {
    this.prepareFormGroup();
  }

  submit() {
    if (this.form.valid) {
      this.reportService.showUserInfo('Zamówienie zostało zarejestrowane. Dziękujemy!');
      const url = `${window.location.origin}/${RouteName.PAYMENT_PROCESS}`;
      window.open(url, '_blank');
    } else {
      this.reportService.showUserInfo('Popraw błędne dane');
    }
  }

  private prepareFormGroup() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [CustomValidator.phone]),
      street: new FormControl('', [Validators.required]),
      houseNumber: new FormControl('', [Validators.required]),
      apartmentNumber: new FormControl(''),
      city: new FormControl('', [Validators.required]),
      postalCode: new FormControl('', [Validators.required, CustomValidator.postalCode]),
      delivery: new FormControl('', [Validators.required]),
    });
  }
}
