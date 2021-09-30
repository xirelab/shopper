import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './container/admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductsServices } from '../services/products/products.services';
import { ProductMaintenanceComponent } from './components/product-maintenance/product-maintenance.component';

const routes: Routes = [{
  path: '',
  component: AdminComponent
}];

@NgModule({
  declarations: [
    AdminComponent,
    ProductMaintenanceComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    ProductsServices
  ]
})
export class AdminModule { }
