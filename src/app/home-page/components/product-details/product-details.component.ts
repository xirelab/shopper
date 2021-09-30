import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartServices } from 'src/app/services/cart/cart.services';
import { ProductsServices } from 'src/app/services/products/products.services';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  count: number = 0;

  @Input() product: Product | undefined;

  constructor(
    private cartServices: CartServices
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    this.count = 0;
  }
  
  onClick() {
    if (this.product) {
      this.cartServices.insert(this.product, this.count);
    }    
  }
}
