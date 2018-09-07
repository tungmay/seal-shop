import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Seal shop';
  listItem = [
    { id: "1", title: "รองเท้า", category: "รองเท้า", price: 299, imageUrl: "http://www.baanlaesuan.com/app/uploads/2017/03/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B9%89%E0%B8%B2%E0%B9%83%E0%B8%9A.jpg" },
    { id: "2", title: "เสื้อ", category: "เสื้อ",price: 399, imageUrl: "https://cultees.co/canvas/5ac4b36e03eb0-front-img.png" },
    { id: "3", title: "กระเป๋า", category: "กระเป๋า",price: 799, imageUrl: "https://f.btwcdn.com/store-38095/product/1fe4e5fb-cb7c-d9a5-f19f-5a3749f324b8.jpg" }
    
  ];

  toggleCart = false;

  constructor(productService: ProductService){
    productService.itemList = this.listItem;
  }
}
