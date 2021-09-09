import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";

export const routes: Routes = [
  { path: 'app', component: AppComponent},
  { 
    path: '',
    // loadChildren: './home-page/home-page.module#HomePageModule',
    loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule),
    runGuardsAndResolvers: 'always'
  },
  { 
    path: 'shopping-cart',
    loadChildren: () => import('./shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule),
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}