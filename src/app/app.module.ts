import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {
  MatSidenavModule, MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule
  , MatIconModule, MatInputModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { WorkoutComponent } from './workout/workout.component';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';

import { LoginRoutingModule } from './app-routing/login-routing.module';
import { HttpModule } from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
// import 'hammer.js';
// import {} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkoutComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    MatIconModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MatSidenavModule,
    AppRoutingModule,
    LoginRoutingModule,
    HttpModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
