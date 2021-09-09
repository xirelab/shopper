import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  MenuClicked(menu: string) {
    if (menu === 'cart') { this.router.navigate(['shopping-cart']); }
    else { this.router.navigate(['']); }
  }

}