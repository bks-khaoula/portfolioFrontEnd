import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AjouterComponent } from './ajouter/ajouter.component';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {HttpClientModule} from '@angular/common/http';
import { ConferenceService } from 'src/services/conference.service';
import { AgmCoreModule} from '@agm/core';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    AjouterComponent,
    
    
  ],
  imports: [
    
    BrowserModule,
    ReactiveFormsModule,
    FormsModule, 
    AppRoutingModule, BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,MatSelectModule,
    HttpClientModule,AgmCoreModule.forRoot({
      apiKey:'AIzaSyA8XZOvt7au3RotHynQwE_iI7eJ--CLNm0'
    }),MatStepperModule,MatButtonModule,
   
  ],
  providers: [ConferenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
