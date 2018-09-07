import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../cart';
import { FormControl, FormArray, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems: CartItem;
  cartItemKeys: string[];
  formGroup: FormGroup;
  amountArrayControl: FormArray;
  totalPrice: number;

  constructor(public cartService: CartService, formBuilder: FormBuilder) {
    this.cartItems = cartService.getItems();
    // console.dir(this.cartItems);
    this.cartItemKeys = Object.keys(this.cartItems);
    // console.dir(this.cartItemKeys);

    this.amountArrayControl = new FormArray([], Validators.required)
    this.formGroup = new FormGroup({
      cartList: this.amountArrayControl
    });

    // Observable เรียกสั้นๆว่า “ตัวส่งข้อมูล”
    // Observer เรียกสั้นๆว่า “ตัวรับข้อมูล”
    // Subscription นี้เป็นตัวเชื่อมการทำงานของ Observable และ Observer เข้าหากัน

    // observer จะมี functions รับด้วยกัน ​3 ตัวคือ next, error, complete เอาไว้สำหรับรับค่าจาก callback จาก observable

    this.formGroup.valueChanges.subscribe({ //รับข้อมูล
      next: (data) => {
        this.totalPrice = data.cartList.reduce((total, amount, index) => {
          const itemId = this.cartItemKeys[index];
          const itemInCart = this.cartItems[itemId];
          return (amount * itemInCart.item.price) + total;
        }, 0);
      },
      error: (err) => { },
      complete: () => { }
    });

    this.cartItemKeys.forEach((cartItemKey) => {
      this.amountArrayControl.push(new FormControl(this.cartItems[cartItemKey].amount, [Validators.min(1), Validators.required]))
    });

  }


  ngOnInit() {

  }

  removeItem(itemId: string, index: number) {
    delete this.cartItems[itemId];
    this.cartItemKeys.splice(index, 1);
    this.amountArrayControl.removeAt(index);

  }

}
