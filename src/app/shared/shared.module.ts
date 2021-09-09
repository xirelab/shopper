import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from './components/top-menu/top-menu.component';

@NgModule({
  imports: [
    CommonModule    
  ],
  declarations: [
    TopMenuComponent
  ],
exports: [ 
  TopMenuComponent 
]
})
export class SharedModule { }