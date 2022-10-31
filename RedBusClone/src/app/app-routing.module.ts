import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusesComponent } from './buses/buses.component';
import { HomeComponent } from './home/home.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
 {   path: '',   component: HomeComponent },
 {   path: 'bus',   component: BusesComponent },
 {   path: 'home',   component: HomeComponent },
  {path:'about',component:AboutComponent},
  {path:'privacy',component:PrivacyComponent},
  {path:'contact',component:ContactComponent},
  {path:'booking',component:BookingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
