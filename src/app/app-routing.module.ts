import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'precios', component: PreciosComponent},
  { path: 'protegida', component: ProtegidaComponent},
  { path: '**', pathMatch: 'full', redirectTo:'home'}
];

export const AppRoutingModule = RouterModule.forRoot(ROUTES);
