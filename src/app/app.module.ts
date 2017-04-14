import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Router, Routes, NavigationStart, RouterOutletMap } from "@angular/router";

import { AppComponent } from './app.component';
import { ConstructionComponent } from './components/construction/construction.component';

// import { AppRoutingModule } from "./app-routing.module";
// import { routing } from "./app-routing.module";


const routes: Routes = [
  { path: '', redirectTo: '/construction', pathMatch: 'full' },
  { path: '/', redirectTo: '/construction', pathMatch: 'full' },
  { path: 'construction', component: ConstructionComponent },
    { path: '**', redirectTo: '/construction', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    ConstructionComponent
  ],
  imports: [
    // AppRoutingModule,
    NgbModule.forRoot(),
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    RouterOutletMap
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
