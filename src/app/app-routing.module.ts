

import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes, Router, NavigationStart } from '@angular/router';


import { ConstructionComponent } from './components/construction/construction.component';

const routes: Routes = [
	{ path: 'construction', component: ConstructionComponent },
	{ path: '', redirectTo: '/construction', pathMatch: 'full' },
    { path: '**', redirectTo: '/construction', pathMatch: 'full' }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }