import { Injectable } from '@angular/core';
import { Item } from './item';
import { CartItem } from './cart';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private itemList: CartItem;
  private itemCout: ShoppingCartComponent;
  private count: number = 0;

  constructor(private productService: ProductService) {
    this.itemList = {};90
  }

  getItems() {
    return this.itemList;
  }

  addItem(item: Item) {
    if (this.itemList[item.id]) {
      this.itemList[item.id].amount++;
    } else {
      this.itemList[item.id] = {
        item: item,
        amount: 1
      }
    }
    this.count++;
  }
}
