import {Component, OnInit} from '@angular/core';
import {CartItem, ShoppingCartService} from '../../../shared/service/shopping-cart.service';
import {ReportService} from '../../../shared/service/report.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styles: [],
})
export class ShoppingListComponent implements OnInit {

  products: CartItem[] = [];

  total: number;

  readonly columns: string[] = ['product', 'priceForOne', 'count', 'priceForAll', 'action'];

  constructor(
    private shoppingCartService: ShoppingCartService,
    private reportService: ReportService,
  ) {
  }

  ngOnInit(): void {
    this.shoppingCartService.getProductListObservable()
      .subscribe(list => {
        this.products = Array.from(list.values());
        this.getTotal();
      });
  }

  getTotal() {
    this.total = this.products.reduce((prevVal, currVal) => prevVal + currVal.product.price * currVal.count, 0);
  }

  removeItem(id: number) {
    this.shoppingCartService.removeProduct(id);
    this.reportService.showUserInfo('Usunięto produkt z listy');
  }
}
