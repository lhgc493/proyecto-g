import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert';
<<<<<<< HEAD
import { UsuarioService } from '../services/index.service';
import { UsuarioModel } from '../models/usuario.model';
import { Router } from '@angular/router';
=======
>>>>>>> f54b1b87e7c1cde66ea5a4bf4ebd847c07605840



declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

<<<<<<< HEAD
  constructor(private usuService: UsuarioService, public router: Router) { }


=======
  constructor() { }
>>>>>>> f54b1b87e7c1cde66ea5a4bf4ebd847c07605840

  sonIguales(campo1: string, campo2: string) {
  return (group: FormGroup) => {
    const pass1 = group.controls[campo1].value;
    const pass2 = group.controls[campo2].value;
    if (pass1 === pass2) {
      return null;
    }

    return {

      sonIguales: true
    };
  };
  }

  ngOnInit() {
    init_plugins();

    this.form = new FormGroup({
<<<<<<< HEAD
      nombre: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl (null, Validators.required),
      password1: new FormControl (null, Validators.required),
      condiciones: new FormControl (false)
    }, { validators: this.sonIguales( 'password', 'password1') });
  }

  public registrarUsuario() {
    if ( this.form.invalid ) {
      // swal ('Importante', 'Password deben ser iguales', 'warning');
=======
      email: new FormControl(null, [Validators.required, Validators.email]),
      pwd: new FormControl (null, Validators.required),
      pwd1: new FormControl (null, Validators.required),
      condiciones: new FormControl (false)
    }, { validators: this.sonIguales( 'pwd', 'pwd1') });
  }

  registrarUsuario() {
    if ( this.form.invalid ) {
      swal ('Importante', 'Password deben ser iguales', 'warning');
>>>>>>> f54b1b87e7c1cde66ea5a4bf4ebd847c07605840
      return;
    }
    if ( !this.form.value.condiciones ) {

      swal ('Importante', 'Debe aceptar las condiciones', 'warning');
      return;

    }

    console.log('Forma valida', this.form.valid);
    console.log(this.form.value);
<<<<<<< HEAD

    const usuario = new UsuarioModel(
      this.form.value.nombre,
      this.form.value.email,
      this.form.value.password

    );

    this.usuService.crearUsuario(usuario).subscribe(resp => {
    this.router.navigate(['/login']);
   });
  }



=======
  }

>>>>>>> f54b1b87e7c1cde66ea5a4bf4ebd847c07605840
}
