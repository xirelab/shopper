import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsServices } from 'src/app/services/products/products.services';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {  

  products: Product[] | undefined;
  product: Product | undefined;
  isNewproduct: boolean = false;
  
  constructor(
    private productService: ProductsServices
  ) { }

  ngOnInit() {
    this.getProducts();   
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => {
        console.log("admin - products:"); console.log(products);
        this.products = products
      });
  }

  onClick(id: any) {
    console.log("selected product id is " + id);
    this.isNewproduct = false;
    this.product = this.products?.find(x => x.id == id);
  }
}
