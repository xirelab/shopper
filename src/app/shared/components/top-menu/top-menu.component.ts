import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServices } from 'src/app/services/cart/cart.services';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  count: number = 0;

  constructor(
    public router: Router,
    private cartServices: CartServices) { }

  @Input() userType : string = "cusromer";

  ngOnInit() {
    this.cartServices.get().subscribe(x => this.count = x.items.length);
  }

  MenuClicked(menu: string) {
    switch (menu) {
      case 'admin':
        this.router.navigate(['admin']);
        break;
      case 'cart':
        this.router.navigate(['shopping-cart']);
        break;
      default:
        this.router.navigate(['']);
        break;
    }
  }

  getCart() {
    return `My Cart (${this.count})`;
  }

}