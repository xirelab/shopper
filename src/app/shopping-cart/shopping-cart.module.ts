import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './container/cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CartServices } from '../services/cart/cart.services';

const routes: Routes = [{
  path: '',
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
  ],
  providers: [
    // CartServices
  ]
})
export class ShoppingCartModule { }