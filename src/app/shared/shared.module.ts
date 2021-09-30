import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  imports: [
    CommonModule    
  ],
  declarations: [
    TopMenuComponent,
    HeaderComponent,
    ProductListComponent
  ],
  exports: [ 
    TopMenuComponent,
    HeaderComponent,
    ProductListComponent
  ]
})
export class SharedModule { }