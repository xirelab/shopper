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
  
  selectedId = -1;
  onClick(id: number) {
    this.selectedId = id;
    this.selectedProdctId.emit(id);
  }

  isSelected(id: number) {
    return id == this.selectedId;
  }
}
