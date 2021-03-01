import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {getItemLabel} from '../../../shared/util/get-item-label.function';
import {ORDER_STATUS} from '../../../shared/const/order-status.const';
import {FormControl} from '@angular/forms';
import {InputType} from '../../../shared/enum/input.type';
import {Subscription} from 'rxjs';
import {ReportService} from '../../../shared/service/report.service';
import {OrderService} from '../../../shared/service/http/order.service';
import {StatusLabelService} from './status-label.service';

@Component({
  selector: 'app-status-label',
  templateUrl: './status-label.component.html',
  styles: [],
})
export class StatusLabelComponent implements OnInit, OnDestroy {

  InputType = InputType;
  ORDER_STATUS = ORDER_STATUS;

  @Input()
  status: string;

  @Input()
  id: string;

  @Input()
  disabled: boolean;

  active: boolean;

  labelField: FormControl;

  private subscription: Subscription;

  private activeItemSubscription: Subscription;

  private previousValue: string;

  constructor(
    private reportService: ReportService,
    private orderService: OrderService,
    private statusLabelService: StatusLabelService,
  ) {
  }

  ngOnInit() {
    this.labelField = new FormControl(this.status);
    this.activeItemSubscription = this.statusLabelService.getActiveItemObservable()
      .subscribe(id => this.active = id === this.id);
    this.subscription = this.labelField.valueChanges.subscribe(value => {
      this.changeOrderStatus(value);
    });
  }

  ngOnDestroy() {
    this.activeItemSubscription.unsubscribe();
    this.subscription.unsubscribe();
  }

  getStatus(value: string): string {
    return getItemLabel(ORDER_STATUS, value).toUpperCase();
  }

  activate() {
    this.statusLabelService.setActiveItem(this.id);
    this.previousValue = this.status;
  }

  private changeOrderStatus(status: string) {
    this.orderService.changeOrderStatus(this.id, status)
      .then(() => this.statusLabelService.setActiveItem(null))
      .then(() => this.reportService.showUserInfo(
        `Zmieniono status z ${this.getStatus(this.previousValue)} na ${this.getStatus(status)}`),
      );
  }
}
