import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { CartServices } from './services/cart/cart.services';
import { HighlightDirective } from './directive/highlight.directive';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    SharedModule
  ],
  declarations: [ 
    AppComponent, 
    // HighlightDirective 
  ],
  providers: [ CartServices ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
