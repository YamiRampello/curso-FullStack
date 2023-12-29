import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private toastr: ToastrService,
    private _userService: UserService,
    private router: Router
  ) {}

  login() {
    //validar usuario ingrese datos
    if (this.username == '' || this.password == '') {
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return;
    }

    //crear el body
    const user: User = {
      username: this.username,
      password: this.password,
    };
    //console.log(user);

    this.router.navigate(['/listPersonas']);

    //Esto tengo que corregir porque es donde me da el error del formato del token
    /*
    this._userService.login(user).subscribe({
      next: (token) => {
        this.router.navigate(['/listPersonas']);
        // console.log(token);
        localStorage.setItem('token', token);
      },
    });*/
  }
}
