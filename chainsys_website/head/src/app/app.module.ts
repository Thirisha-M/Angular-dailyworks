import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HeaderComponent } from './header/header.component';
import { HeaderRightComponent } from './header/header-right/header-right.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderRightComponent
=======

@NgModule({
  declarations: [
    AppComponent
>>>>>>> 6c0a9a9ee579bf9e8b684d7ca9c557b486bcb36e
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
