
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router, Routes, NavigationStart, RouterOutletMap } from "@angular/router";

// import { HttpModule } from '@angular/http';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { AppRoutingModule } from "./app-routing.module";


import { AppComponent } from './app.component';
import { ConstructionComponent } from './components/construction/construction.component';
import { PageNotFoundComponent } from './page-not-found/components/page-not-found.component';


const routes: Routes = [
  { path: 'construction', component: ConstructionComponent },
  { path: '', redirectTo: '/construction', pathMatch: 'full' },
  { path: '**', redirectTo: '/page-not-found', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    ConstructionComponent,
    PageNotFoundComponent
  ],
  imports: [
    // AppRoutingModule,
    // NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    // HttpModule,
    RouterModule.forRoot(routes)
  ],
  // providers: [
  //   RouterOutletMap
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
