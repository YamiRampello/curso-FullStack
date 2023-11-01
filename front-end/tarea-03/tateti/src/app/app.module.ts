import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** Material modules */
import { MatSlideToggleModule } from '@angular/material/slide-toggle';//ejemplo. sacar si luego no se usa
import {MatGridListModule} from '@angular/material/grid-list';
import { GrillaComponent } from './grilla/grilla.component';
import { CeldaComponent } from './celda/celda.component'

@NgModule({
  declarations: [
    AppComponent,
    GrillaComponent,
    CeldaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule, //ejemplo. sacar si luego no se usa
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
