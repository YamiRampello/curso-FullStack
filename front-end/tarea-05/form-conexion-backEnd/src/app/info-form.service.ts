import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InfoFormService {
  mostrarInformacion(informacionUsuario: any) {
    console.log(informacionUsuario);
  }
}
