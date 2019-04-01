import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentContactComponent } from './student-contact/student-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    HomeComponent,
    PagenotfoundComponent,
    StudentProfileComponent,
    StudentContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
