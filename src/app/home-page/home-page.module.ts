import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './container/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductsServices } from '../services/products/products.services';
import { CartServices } from '../services/cart/cart.services';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { HighlightDirective } from '../directive/highlight.directive';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomeComponent,
    ProductDetailsComponent,
    HighlightDirective    
  ],
  providers: [ 
    ProductsServices, 
    // CartServices 
  ]
})
export class HomePageModule { }