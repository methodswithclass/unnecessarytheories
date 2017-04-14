

import { NgModule } from '@angular/core';
// import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes, Router, NavigationStart } from '@angular/router';


import { ConstructionComponent } from './components/construction/construction.component';

const routes: Routes = [
	{ path: 'construction', component: ConstructionComponent },
	{ path: '', redirectTo: '/construction', pathMatch: 'full' },
    { path: '**', redirectTo: '/construction', pathMatch: 'full' }
];


// export const routing: ModuleWithProviders = RouterModule.forRoot(routes);


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }