import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConexionBackEndService {
  private url = '';

  private usuariosBase: Usuario[] = [];
  private _usuario: BehaviorSubject<Usuario[]>;

  constructor(private http: HttpClient) {
    this._usuario = new BehaviorSubject<Usuario[]>([]);
  }

  get usuarios() {
    return this._usuario.asObservable(); 
  }

  crearSuscripcion(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('https://reqres.in/api/users/1', usuario);
  }

  buscarSuscripcion(): Observable<Usuario> {
    return this.http.get<Usuario>('${this.url}');
  }

  buscarSuscripcionporID(usuarioID: number): Observable<{}> {
    return this.http.get<Usuario>('${this.url/id}');
  }

  borrarSuscripcion(usuarioID: number): Observable<{}> {
    return this.http.delete('https://reqres.in/api/users/1');
  }
}
