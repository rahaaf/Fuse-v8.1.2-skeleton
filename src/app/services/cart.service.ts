import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ICart, ICartItem } from 'app/models/ICart';
import { IOrders } from 'app/models/IOrders';
import { IProduct } from 'app/models/IProduct';
import { OrderStatus } from 'app/models/orderStatus';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  [x: string]: any;

  cart: ICart = { items: [{ productId: '', amount: 0, productname: '', price: 0 }] }

  orders: any[] = [];


  // carts: ICartItem [];
  cartSubject: BehaviorSubject<ICart>;

  onCartChanged: Observable<ICart>

  constructor(private afs: AngularFirestore, private as: AuthService) {

    this.cartSubject = new BehaviorSubject<ICart>(this.cart);
    this.onCartChanged = this.cartSubject.asObservable();
  }

  Addtocart(obj: ICartItem) {
    // return this.afs.collection(`users/${this.as.userid}/cart`).add(data);
    this.cart.items.push(obj)
    console.log(this.cart.items);
    this.cartSubject.next(this.cart)
    this.getTotalPrice();

  }

  getproduct() {
    return this.onCartChanged = this.cartSubject.asObservable();
  }

  setproduct(product: any) {

    this.cart.items.push(...product);
    this.cartSubject.next(product);

  }
  getTotalPrice(): number {

    let grandTotal = 0;
    this.cart.items.forEach((a: ICartItem) => {
      grandTotal += a.price * a.amount;
    })
    return grandTotal;
  }

  removeCart(product: any) {
    this.cart.items.map((a: any, index: any) => {
      if (product.id == a.id) {
        this.cart.items.splice(index, 1)
      }
    })
    this.cartSubject.next(this.cart);
  }

  removeAllCart() {
    this.cart.items = [];
    this.cartSubject.next(this.cart)
  }

  buyProduct() {
    let order: IOrders = { total: this.getTotalPrice(), customer: this.as.userData.uid,
       products: this.cart.items , status : OrderStatus.SENDING }
    console.log(order);

     return new Promise((resolve, reject) => {
         this.afs.collection('orders').add(order).then(data => {
             console.log(data);
             resolve(true);
         }, err=>
          {console.log(err);}
         ),reject()

             });

  }

}
