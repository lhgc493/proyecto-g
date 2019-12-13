import { Injectable } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import swal from 'sweetalert';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: UsuarioModel;
  token: string;

  constructor(public http: HttpClient, public router: Router) {
    this.cargarStorage();
  }

  estaLogeado() {
    return(this.token.length > 5) ? true : false;
  }

  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario')) ;
    } else {
      this.token = '';
      this.usuario = null;
    }
  }

  guardarStorage(id: string, token: string, usuario: UsuarioModel) {

    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.usuario = usuario;
    this.token = token;
  }

  logout() {
    this.usuario = null;
    this.token = '';
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['./login']);
  }


  loginGoogle(token: string) {
    const url = URL_SERVICIOS + '/login/google';
    return this.http.post(url, {token}).pipe(map((resp: any) => {
      this.guardarStorage(resp.id, resp.token, resp.usuario);
      return true;
    }));
  }

  login( usuario: UsuarioModel, recuerdame: boolean = false) {

    if (recuerdame) {
      localStorage.setItem('email', usuario.email);
    } else {
      localStorage.removeItem('email');
    }

    const url = URL_SERVICIOS + '/login';
    return this.http.post(url, usuario)
    .pipe(map((resp: any) => {
      // localStorage.setItem('id', resp.id);
      // localStorage.setItem('token', resp.token);
      // localStorage.setItem('usuario', JSON.stringify(resp.usuario));
      this.guardarStorage(resp.id, resp.token, resp.usuario);
      return true;
    }));
  }


 crearUsuario(usuario: UsuarioModel ) {
  const url = URL_SERVICIOS + '/usuario';
  return this.http.post(url, usuario).pipe( map((resp: any) => {
    swal('usuario', 'creado con exito', 'success');
    return resp.usuario;
  }));

 }



}
