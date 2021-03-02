import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from '../../shared/service/http/order.service';
import {ReportService} from '../../shared/service/report.service';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styles: [],
})
export class PaymentPageComponent implements OnInit {

  id: string;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private reportService: ReportService,
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  payForOrder() {
    this.orderService.payForOrder(this.id)
      .then(res => this.reportService.showUserInfo(`Zamówienie nr #${res.orderNo} zostało opłacone`));
  }
}
