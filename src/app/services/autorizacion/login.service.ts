import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  

private _usuario: UsuarioModel;
private _token: string;
constructor(private http: HttpClient) { }

// metodo get de las atributos

public get usuario() : UsuarioModel {
  if(this._usuario != null){
    return this._usuario;
    // en el caso que este nulo pero existe en session storage
  } else if(this._usuario == null && sessionStorage.getItem('usuario') != null){
   this._usuario = JSON.parse(sessionStorage.getItem('usuario')) as UsuarioModel;
   return this._usuario;
  }
 // return new UsuarioModel();
   
}
public get token(): string{
  if(this._token != null){
    return this._token;
    // en el caso que este nulo pero existe en session storage
  } else if(this._token == null && sessionStorage.getItem('token') != null){
   this._token = sessionStorage.getItem('token');
   return this._token;
  }
  return null;

}


login(usuario: UsuarioModel): Observable<any> {
  const urlEndPoint: string = 'http://localhost:8080/oauth/token';

  const params = new URLSearchParams();
  params.set('grant_type','password');
 // params.set('username', usuario.username);
  params.set('password', usuario.password);
  
  const credenciales = btoa('proyectoG' + ':' + '12345');
  const httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/x-www-form-urlencoded',
    'Authorization' : 'Basic ' + credenciales
  });


  return this.http.post<any>(urlEndPoint, params.toString(), {headers: httpHeaders});
}
// metodos para guaradr al usuario en sesion
guardarUsuario(accessToken: string): void{
  let payload = this.ObtenerTokenPayload(accessToken);
  // this._usuario = new UsuarioModel();
  // this._usuario.username = payload.user_name,
  this._usuario.password = payload.password,
  // this._usuario.roles = payload.authorities,
  // this._usuario.enable = payload.enable,
  this._usuario.img = payload.img
/*  this._usuario.username = payload.user_name;
  this._usuario.roles = payload.authorities;
  this._usuario.img = payload.img;
  this._usuario = payload.enable;*/
  sessionStorage.setItem('usuario', JSON.stringify(this._usuario)); // [] por que no hay data enBD 

}
// metodos para guaradr al token en sesion
guardarToken(accessToken: string): void{
  this._token = accessToken;
  sessionStorage.setItem('token',accessToken );
}

// metodo para obtener la segunda parte del json 
// donde esta toda la informacion del usuario
ObtenerTokenPayload(accessToken: string): any{
  if(accessToken != null){
    return JSON.parse(atob(accessToken.split(".")[1]));
  }
  return null;

}
// metodo para indicar si un usuario se logeo o no 
isAuthenticated():boolean{
  let payload = this.ObtenerTokenPayload(this.token);
  if(payload != null && payload.user_name && payload.user_name.length>0){
    return true;
  }
  return false;
}
// metodo para deslogearse y salir
logout(): void{

  this._token = null;
  this._usuario = null;
  sessionStorage.clear();
  // en el caso que solo quieras eliminar algunos items del storage
  // sessionStorage.removeItem('token');
  // sessionStorage.removeItem('usuario')

}

}
