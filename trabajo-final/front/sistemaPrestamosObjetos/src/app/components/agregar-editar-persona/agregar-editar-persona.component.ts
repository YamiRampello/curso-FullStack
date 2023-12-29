import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/interfaces/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-agregar-editar-persona',
  templateUrl: './agregar-editar-persona.component.html',
  styleUrls: ['./agregar-editar-persona.component.css'],
})
export class AgregarEditarPersonaComponent {
  loading: boolean = false;
  form: FormGroup;
  id: number;

  operacion: string = 'Agregar';

  constructor(
    private fb: FormBuilder,
    private _personaService: PersonaService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private aRoute: ActivatedRoute
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      celular: ['', Validators.required],
      mail: ['', Validators.required],
    });

    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if (this.id != 0) {
      this.operacion = 'Editar';
      this.obtenerPersona(this.id);
    }
  }

  obtenerPersona(id: number) {
    this.loading = true;
    this._personaService.getPersona(id).subscribe((data) => {
      this.form.setValue({
        //set (y no patch) pq patch es para algunos
        nombre: data.nombre,
        apellido: data.apellido,
        mail: data.correoElectronico,
        celular: data.celular,
      });
      this.loading = false;
    });
  }

  agregarEditarPersona() {
    const persona: Persona = {
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      celular: this.form.value.celular,
      correoElectronico: this.form.value.mail,
    };
    if (this.id != 0) {
      persona.id = this.id;
      this.editarPersona(this.id, persona);
    } else {
      this.agregarPersona(persona);
    }
  }

  editarPersona(id: number, persona: Persona) {
    this.loading = true;
    this._personaService.updatePersona(id, persona).subscribe(() => {
      this.loading = false;
      this.mensajeExito('editada');
      this.router.navigate(['/listPersonas']);
    });
  }

  agregarPersona(persona: Persona) {
    //Envia objeto al back-end
    this._personaService.addPersona(persona).subscribe((data) => {
      this.mensajeExito('agregada');
      this.router.navigate(['/listPersonas']);
    });
  }

  mensajeExito(accionTexto: string) {
    this._snackBar.open(`La persona fue ${accionTexto} con éxito`, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
