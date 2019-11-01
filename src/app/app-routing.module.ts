import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { FlightsComponent } from './pages/flights/flights.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { CarsComponent } from './pages/cars/cars.component';
import { CruisesComponent } from './pages/cruises/cruises.component';
import { AccountComponent } from './pages/account/account.component';
import { TripsComponent } from './pages/trips/trips.component';
import { FaqsComponent } from './pages/faqs/faqs.component';


const routes: Routes = [
// { path: '', component: LevelComponent},
{ path: '',   redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'flights', component: FlightsComponent },
{ path: 'hotels', component: HotelsComponent },
{ path: 'cars', component: CarsComponent },
{ path: 'cruises', component: CruisesComponent },
{ path: 'account', component: AccountComponent },
{ path: 'trips', component: AccountComponent },
{ path: 'faqs', component: FaqsComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],

  providers: [],
exports: [ RouterModule ],

  declarations: []
})
export class AppRoutingModule { }
