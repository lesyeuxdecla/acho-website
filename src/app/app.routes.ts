import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { FootballPageComponent } from './hobby-practice/football/football-page/football-page.component';
import { GoogleMapsModule } from '@angular/google-maps'; 


export const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule) },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'football', component: FootballPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes), GoogleMapsModule],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
