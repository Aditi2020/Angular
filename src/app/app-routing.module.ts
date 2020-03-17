import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './About/About.component';
import { ServiceComponent } from './Service/Service.component';
import { TeamComponent } from './Team/Team.component';
import { ContactComponent } from './Contact/Contact.component';
import { AppointmentComponent } from './Appointment/Appointment.Component';
import { FooterComponent } from './Footer/Footer.Component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Service', component: ServiceComponent},
  {path: 'Team', component: TeamComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'Appointment', component: AppointmentComponent},
  {path: 'Footer', component: FooterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

