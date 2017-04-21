import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDojymJ6_FD8viLCnJKRPtR_pRJD_DDtjE",
  authDomain: "pepper-64105.firebaseapp.com",
  databaseURL: "https://pepper-64105.firebaseio.com",
  projectId: "pepper-64105",
  storageBucket: "pepper-64105.appspot.com",
  messagingSenderId: "27546252249"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
