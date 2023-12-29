import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../interfaces/persona';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  private myAppUrl: string = 'http://localhost:5160/';
  private myApiUrl: string = 'api/personas/';

  constructor(private http: HttpClient) {}

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getPersona(id: number): Observable<Persona> {
    return this.http.get<Persona>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  deletePersona(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  addPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(`${this.myAppUrl}${this.myApiUrl}`, persona);
  }

  updatePersona(id: number, persona: Persona): Observable<void> {
    return this.http.put<void>(
      `${this.myAppUrl}${this.myApiUrl}`,
      persona
    );
  }
}
