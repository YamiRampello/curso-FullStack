import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InfoFormService {
  constructor() {}

 mostrarInformacion(informacionUsuario:any){
    console.log(informacionUsuario)
  }
}
