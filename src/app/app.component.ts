import { Component, OnInit, VERSION } from '@angular/core';
import { getDogs } from './services/dogs/dogs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.getDogs();
  }
  userType = 'admin';  // customer
  dogs: any;
  count = 0;
  getDogs() {
    getDogs().then((x) => {
      this.dogs = x;
      console.log(x);
    });
    console.log(this.dogs);
  }
}
