import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './container/cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{
  path: 'shopping-cart',
  component: CartComponent
}];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CartComponent
  ]
})
export class ShoppingCartModule { }