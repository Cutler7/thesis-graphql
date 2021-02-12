import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RouteName} from '../../../shared/enum/route-name.enum';

@Component({
  selector: 'app-delivery-and-payment',
  templateUrl: './delivery-and-payment.component.html',
  styles: [],
})
export class DeliveryAndPaymentComponent implements OnInit {

  form: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.prepareFormGroup();
    console.log(this.form);
  }

  submit() {
    const url = `${window.location.origin}/${RouteName.PAYMENT_PROCESS}`;
    window.open(url, '_blank');
  }

  private prepareFormGroup() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl(3, [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl(''),
      street: new FormControl('', [Validators.required]),
      houseNumber: new FormControl('', [Validators.required]),
      apartmentNumber: new FormControl(''),
      city: new FormControl('', [Validators.required]),
      postalCode: new FormControl('', [Validators.required]),
    });
  }
}
