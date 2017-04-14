import { Component } from '@angular/core';
import { RouterModule, Routes, Router, NavigationStart } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers:[Router]
})
export class AppComponent {
  title = 'app works!';

  // constructor (public router:Router) {

  // 	this.router.navigate(["/construction"]);
  // }
}
