import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  @Input() products: any; //Product[] | undefined;
  @Input() isAdmin: boolean = false;
  @Output() selectedProdctId: EventEmitter<number> = new EventEmitter<number>();
  
  onClick(id: number) {
    this.selectedProdctId.emit(id);
  }

}
