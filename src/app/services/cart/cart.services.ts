import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ICart, Cart, CartItem } from "src/app/models/cart.model";
import { Product } from "src/app/models/product.model";

@Injectable()
export class CartServices {
    private cart: BehaviorSubject<ICart>;
    constructor() {
        this.cart = new BehaviorSubject<ICart>(new Cart());
    }

    reset() {        
        if (this.cart) {
            this.cart.next(new Cart());
        } else {
            this.cart = new BehaviorSubject<ICart>(new Cart());
        }
    }

    get() : Observable<ICart> {
        console.log("Get Mycart is "); console.log(this.cart);
        return this.cart;
    }

    insert(product: Product, quantity: number) {
        if (quantity < 1) { return; }
        let myCart = this.cart.value;
        if (myCart && myCart.items) {
            if (product.price) {
                myCart.total = myCart.total + (product.price * quantity);
            }
            let item = myCart.items.find(x => x.productId == product.id);
            console.log("selected product item is "); console.log(item);            
            if (item) {
                item.quantity += quantity;
            } else {
                if (product.id && product.name) {
                    myCart.items.push(new CartItem(product.id, product.name, quantity));
                }                
            }
        }

        console.log("selected Mycart is "); console.log(myCart);
        this.cart.next(myCart);
    }

    remove(productId: number, quantity: number) {
        // TODO
    }
}