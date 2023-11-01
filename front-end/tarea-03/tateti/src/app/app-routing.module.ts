import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrillaComponent } from './grilla/grilla.component';

const routes: Routes = [
  {
    path: 'grilla',
    component: GrillaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
