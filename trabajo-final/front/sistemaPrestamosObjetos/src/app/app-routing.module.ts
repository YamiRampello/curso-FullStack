import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { ListaPersonasComponent } from './components/lista-personas/lista-personas.component';
import { AgregarEditarPersonaComponent } from './components/agregar-editar-persona/agregar-editar-persona.component';
import { VerPersonaComponent } from './components/ver-persona/ver-persona.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'iniciar-sesion', pathMatch: 'full' },
  { path: 'iniciar-sesion', component: LoginComponent },
  { path: 'listPersonas', component: ListaPersonasComponent },
  { path: 'agregarPersona', component: AgregarEditarPersonaComponent },
  { path: 'verPersona/:id', component: VerPersonaComponent },
  { path: 'editarPersona/:id', component: AgregarEditarPersonaComponent },
  { path: '**', redirectTo: 'listPersonas', pathMatch: 'full' }, //si no matchea lo lleva aca
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
