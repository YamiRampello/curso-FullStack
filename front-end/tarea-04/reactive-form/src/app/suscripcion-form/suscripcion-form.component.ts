import { Component, inject } from '@angular/core';
import { validacionEmail } from '../shared/email.validator';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { InfoFormService } from '../info-form.service';

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

  submit() {
    this.infoServicio.mostrarInformacion(this.suscriptionForm.value);
  }
}
