import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DELIVERY_METHOD} from 'src/app/shared/const/delivery-method.const';
import {RouteName} from '../../../shared/enum/route-name.enum';
import {InputType} from '../../../shared/enum/input.type';
import {ReportService} from '../../../shared/service/report.service';
import {CustomValidator} from '../../../shared/const/custom-validator';
import {OrderService} from '../../../shared/service/http/order.service';
import {ShoppingCartService} from '../../../shared/service/shopping-cart.service';
import {Order} from '../../../shared/model/order.model';
import {Router} from '@angular/router';

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
    private router: Router,
    private reportService: ReportService,
    private orderService: OrderService,
    private shoppingCartService: ShoppingCartService,
  ) {
  }

  ngOnInit(): void {
    this.prepareFormGroup();
  }

  submit() {
    if (this.form.valid) {
      this.createNewOrder().then(res => {
        this.reportService.showUserInfo('Zamówienie zostało zarejestrowane. Dziękujemy!');
        this.shoppingCartService.clearCart();
        this.router.navigate([RouteName.SHOP, RouteName.LIST]);
        const url = `${window.location.origin}/${RouteName.PAYMENT_PROCESS}/${res._id}`;
        window.open(url, '_blank');
      });
    } else {
      this.reportService.showUserInfo('Popraw błędne dane');
    }
  }

  private createNewOrder(): Promise<Order> {
    const value = this.form.value;
    const productList = Array.from(this.shoppingCartService.getProductList().values());
    value.products = productList.map(el => ({productId: el.product._id, amount: el.count}));
    return this.orderService.createOrder(this.form.value);
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
