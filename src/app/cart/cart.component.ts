import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from './entity/product.entity';
import { Item } from './entity/item.entity';
import { CartService } from '../cakeform/cakeform.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { CakeformData } from '../cakeform/cakeform.model';
import {CartformData} from './cart.model';

// import { ProductService } from './services/product.service';

@Component({
    templateUrl: 'cart.component.html',
})

export class CartComponent implements OnInit {
public items: Item[] = [];
public total = 0;
public data: CakeformData[] = [];
public products: Product[] = [];
public cartValue: any;
public temp: any;
// public cartdata: CartformData[] = [];
quantity = 1;
keepOrder = (a, b) => {
    return a;
}
constructor(public http: HttpClient,
            private activatedRoute: ActivatedRoute,
            private cartService: CartService
) {  }

ngOnInit() {
    this.products = this.cartService.findAll();
    // console.log(this.products);
    this.quantity = 1;
    this.cartValue = JSON.parse(localStorage.getItem('cart'));
    // console.log(this.cartValue);
    // console.log(localStorage.getItem('cart'));
    // console.log(localStorage.getItem('nameprice'));
    this.temp = JSON.parse(localStorage.getItem('nameprice'));  // i have set nameprice attribute in my localstorage in somecomponent
    // console.log(this.temp);
    // console.log(localStorage.getItem('nameprice'));
//     this.activatedRoute.params.subscribe(params => {
//     const id = params.id;
//     if (id) {
// const item: Item = {
// product: this.cartService.find(id),
// quantity: 1
// };
// if (localStorage.getItem('cart') == null) {
// const cart: any = [];
// cart.push(JSON.stringify(item));
// localStorage.setItem('cart', JSON.stringify(cart));
// } else {
// const cart: any = JSON.parse(localStorage.getItem('cart'));
// let index = -1;
// for (let i = 0; i < cart.length; i++) {
// const it: Item = JSON.parse(cart[i]);
// if (item.product.id === id) {
// index = i;
// break;
// }
// }
// if (index === -1) {
// cart.push(JSON.stringify(item));
// localStorage.setItem('cart', JSON.stringify(cart));
// } else {
// const it: Item = JSON.parse(cart[index]);
// item.quantity += 1;
// cart[index] = JSON.stringify(item);
// localStorage.setItem('cart', JSON.stringify(cart));
// }
// }
// this.loadCart();
// } else {
// this.loadCart();
// }
// });
// }

// loadCart(): void {
// this.total = 0;
// this.items = [];
// const cart = JSON.parse(localStorage.getItem('cart'));
// // tslint:disable-next-line: prefer-for-of
// for (let i = 0; i < cart.length; i++) {
// const item = JSON.parse(cart[i]);
// this.items.push({
// product: item.product,
// quantity: item.quantity
// });
// this.total += item.product.price * item.quantity;
// }
// }

// remove(id: string): void {
// const cart: any = JSON.parse(localStorage.getItem('cart'));
// const index = -1;
// for (let i = 0; i < cart.length; i++) {
// const item: Item = JSON.parse(cart[i]);
// if (item.product.id === id) {
// cart.splice(i, 1);
// break;
// }
// }
// localStorage.setItem('cart', JSON.stringify(cart));
// this.loadCart();
 }
 placeOrder(item: any) {
    const fd = new HttpParams()
    .set('size', item.size)
    .set('spongetype', item.spongetype)
    .set('cream', item.cream)
    .set('egg_or_eggless', item.egg_or_eggless)
    .set('cake_filler', item.cake_filler)
    .set('message', item.message)
    .set('message_color', item.message_color)
    .set('first_name', item.first_name)
    .set('email_ID', item.email_ID)
    .set('mobile_number', item.mobile_number)
    .set('category', this.temp.category)
    .set('subcategory', this.temp.subcategory)
    .set('name', this.temp.name)
    .set('price', this.temp.price);
    // console.log(fd);
    // console.log(item);
    // console.log(JSON.stringify(this.cartValue));
    this.http.post('http://localhost:3000/order/placeorder', fd
    //  {
    //     size: item.size,
    //     spongetype : item.spongetype,
    //     cream : item.cream,
    //     egg_or_eggles : item.egg_or_eggles,
    //     cake_filler : item.cake_filler,
    //     message:  item.message,
    //     message_color : item.message_color,
    //     first_name : item.first_name,
    //     email_ID : item.email_ID,
    //     mobile_number: item.mobile_number,
    //     category: item.category,
    //     subgroup: item.subgroup,
    //     name: this.temp.name,
    //     price:  this.temp.price
    // }
    ).subscribe((res: CakeformData[]) => {
          // console.log(res);
          this.data = res;
      });
    }
 addItem(item: any) {
    console.log(item);
    this.quantity  = this.quantity + 1;
    const index = this.cartValue.indexOf(item);
    console.log(index);
    this.cartValue.push(item);
    console.log(this.cartValue);
    localStorage.setItem('cart', JSON.stringify(this.cartValue));
 }
 removeItem(item: any) {
    console.log(item);
    this.quantity  = this.quantity - 1;
    const index = this.cartValue.indexOf(item);
    console.log(index);
    this.cartValue.splice(index, 1);
    console.log(this.cartValue);
    localStorage.setItem('cart', JSON.stringify(this.cartValue));
 }
}
