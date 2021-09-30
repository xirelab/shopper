import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { CartServices } from 'src/app/services/cart/cart.services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Cart | undefined;
  constructor(private cartServices: CartServices) { }

  ngOnInit() {
    this.cartServices.get().subscribe(x => this.cart = x);
    // .pipe(
    //   map(data => this.cart = data)
    // );
  }

}