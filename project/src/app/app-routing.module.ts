import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentContactComponent } from './student-contact/student-contact.component';


const routes: Routes = [
  {path:'home'  , component: HomeComponent },
  {path:'student' , component:StudentDetailsComponent,
children:[
  {path:'profile',component:StudentProfileComponent},
{path:'contact',component:StudentContactComponent}]

},
  {path:'' , redirectTo:'/home' , pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
