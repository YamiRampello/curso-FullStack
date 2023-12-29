import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modulos
import { SharedModule } from './shared/shared.module';

// Componentes
import { AgregarEditarPersonaComponent } from './components/agregar-editar-persona/agregar-editar-persona.component';
import { ListaPersonasComponent } from './components/lista-personas/lista-personas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VerPersonaComponent } from './components/ver-persona/ver-persona.component';
import { LoginComponent } from './auth/login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarPersonaComponent,
    ListaPersonasComponent,
    VerPersonaComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [
    /*{provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true }*/],
  bootstrap: [AppComponent],
})
export class AppModule {}
