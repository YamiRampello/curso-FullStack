import { Component, inject } from '@angular/core';
import { validacionEmail } from '../shared/email.validator';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { InfoFormService } from '../info-form.service';
import { Usuario } from '../usuario';
import { ConexionBackEndService } from '../conexion-back-end.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-suscripcion-form',
  templateUrl: './suscripcion-form.component.html',
  styleUrls: ['./suscripcion-form.component.css'],
})
export class SuscripcionFormComponent {
  title = 'Para completar la suscripción, complete los siguientes datos';

  constructor(private fb: FormBuilder) {}

  get nombre() {
    return this.suscriptionForm.get('nombre') as FormControl;
  }
  get apellido() {
    return this.suscriptionForm.get('apellido') as FormControl;
  }
  get email() {
    return this.suscriptionForm.get('email') as FormControl;
  }
  get emailConfirm() {
    return this.suscriptionForm.get('emailConfirm') as FormControl;
  }
  get telefono() {
    return this.suscriptionForm.get('telefono') as FormControl;
  }
  get contrasena() {
    return this.suscriptionForm.get('contrasena') as FormControl;
  }

  get notificaciones() {
    return this.suscriptionForm.get('notificaciones') as FormControl;
  }
  get terminos() {
    return this.suscriptionForm.get('terminos') as FormControl;
  }

  suscriptionForm = this.fb.group(
    {
      nombre: ['', [Validators.required, Validators.maxLength(20)]],
      apellido: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      emailConfirm: ['', [Validators.required, Validators.email]],
      telefono: [
        '',
        [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(15),
        ],
      ],
      contrasena: ['', [Validators.required, Validators.minLength(5)]],
      notificaciones: ['', Validators.required],
      terminos: ['', Validators.requiredTrue],
    },
    { validacionEmail }
  );

  public infoServicio = inject(InfoFormService);
  public conexionBackEnd = inject(ConexionBackEndService);

  submit(event: Usuario) {
    this.infoServicio.mostrarInformacion(this.suscriptionForm.value);
    //this.conexionBackEnd.agregarSuscripcion(event);
  }

  ngOnInit() {
    //primero se suscribe. entnces al usar next luego, va a ir 'acumulando' los valores
    /*
    this.conexionBackEnd.usuarios.subscribe((usuarios: any) => {
      console.log(usuarios);
    });
*/
    this.conexionBackEnd.crearSuscripcion({
      nombre: '',
      apellido: '',
      email: '',
      emailConfirm: '',
      telefono: 123456,
      contrasena: '',
      notificaciones: '',
      terminos: true,
    });

    //this.conexionBackEnd.borrarSuscripcion(usuario.id).subscribe();


  }

  //post para que lo de de alta. si, es el create del html post/todo
  //obetener todo --> get/todo/1
  //borrar un todo delete/todo/1
  //va aca o en el servicio?

  /** agregar */
  //  addUsuario(usuario: Usuario): Observable<Usuario> {
  //  return this.http.post<Usuario>(this.heroesUrl, hero, httpOptions);
  //.pipe(
  //catchError(this.handleError('addHero', usuario));
  //);
  //} //esto devuelve un usuario con el id asignado
  //this.ConexionBackEndService.addUsuario(newHero).subscribe(usuario => this.usuarios.push(usuario))



  /////////////////////////////codigo clase

  /*
  url = 'https://jsonplaceholder.typicode.com/todos/50';
  constructor(private http: HttpClient) {}
  getTodo(): Observable<Todo> {
    return this.htttp.get<Todo>(this.url);
  }*/

  /* para recuperar uno particular
  url = 'https://jsonplaceholder.typicode.com/todos';
  recupero todos de la URL, pero si necesito uno en particular,lo recupero aca
  constructor(private http: HttpClient) {}
  getTodo(id:number): Observable<Todo> {
    return this.htttp.get<Todo>('${this.url}/${id}');
  */

  // getTodo(1) ?
  /*
    //recurperar todos
constructor(private http: HttpClient) {}
getTodo(): Observable<Todo[]> {
  return this.htttp.get<Todo[]>('${this.url}');
*/
}
