import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rol } from 'src/app/models/rol';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private http: HttpClient) { }

  private urlEnpoint: string ='http://localhost:8080/api/rol';
  private httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});
 
   getRoles(): Observable<Rol[]> {
    return this.http.get<Rol[]>(this.urlEnpoint);
  }

 getRoldescripcion(desc: string): Observable<Rol> {
   return this.http.get<Rol>(`${this.urlEnpoint}/descripcion/${desc}`);
 }

  getRol(id): Observable<Rol> {
    return this.http.get<Rol>(`${this.urlEnpoint}/${id}`);
  }

  create(rol: Rol): Observable<Rol> {
    return this.http.post<Rol>(this.urlEnpoint, rol, {headers: this.httpHeaders});
  }

 update(rol: Rol): Observable<Rol>{
   return this.http.put<Rol>(`${this.urlEnpoint}/${rol.id}`, rol, {headers: this.httpHeaders});
 }
}
