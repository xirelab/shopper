import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartServices } from 'src/app/services/cart/cart.services';
import { ProductsServices } from 'src/app/services/products/products.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] | undefined;
  product: Product | undefined;

  constructor(
    private productService: ProductsServices,
    private cartServices: CartServices
  ) { }

  ngOnInit() {
    this.getProducts();   
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => {
        console.log("home - products:"); console.log(products);
        this.products = products
      });
  }

  onClick(id: any) {
    console.log("selected product id is " + id);
    this.product = this.products?.find(x => x.id == id);
  }

}