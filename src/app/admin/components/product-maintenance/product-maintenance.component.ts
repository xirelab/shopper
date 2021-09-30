import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsServices } from 'src/app/services/products/products.services';

@Component({
  selector: 'app-product-maintenance',
  templateUrl: './product-maintenance.component.html',
  styleUrls: ['./product-maintenance.component.scss']
})
export class ProductMaintenanceComponent implements OnChanges {

  @Input() productId = "";
  @Input() productName = "";
  @Input() productPrice = "";
  @Input() isNewproduct = false;

  constructor(private productsServices: ProductsServices) { }

  ngOnChanges(changes: SimpleChanges) {
    
  }

  inputId($event: any) {
    if ($event && $event.target) {
      this.productId = $event.target.value
    }
  }

  inputName($event: any) {
    if ($event && $event.target) {
      this.productName = $event.target.value
    }
  }

  inputPrice($event: any) {
    if ($event && $event.target) {
      this.productPrice = $event.target.value
    }
  }

  addProduct() {
    if (this.productId && +this.productId > 0) {
      this.productsServices.addProduct(
        new Product(+this.productId, this.productName, +this.productPrice))
      .subscribe(response => {
        console.log(response)
        // this.getProducts();
      });
    }
  }

  removeProduct() {
    if (this.productId && +this.productId > 0) {
      console.log("product to remove: "); console.log(this.productId)
      this.productsServices.deleteProduct(+this.productId).subscribe(product => console.log(product));
    }
  }

  updateProduct(){
    if (this.productId && +this.productId > 0) {
      console.log("product to update: "); console.log(this.productId)
      this.productsServices.editProduct(
        new Product(+this.productId, this.productName, +this.productPrice)
      ).subscribe(response => console.log(response));
    }    
  }

}
