import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GrillaComponent } from './grilla/grilla.component';
import { CeldaComponent } from './celda/celda.component';

@NgModule({
  declarations: [AppComponent, GrillaComponent, CeldaComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
