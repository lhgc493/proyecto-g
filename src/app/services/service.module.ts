import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



// servicios centralizados en este modulo
import {
  SettingsService,
  SidebarService,
  SharedService,
<<<<<<< HEAD
  UsuarioService,
  LoginService,
  RolService,
  LoginGuardGuard

} from './index.service';

import { HttpClientModule } from '@angular/common/http';


=======
  UsuarioService

} from './index.service';

>>>>>>> f54b1b87e7c1cde66ea5a4bf4ebd847c07605840


@NgModule({
  declarations: [],
  imports: [
<<<<<<< HEAD
    CommonModule,
    HttpClientModule
=======
    CommonModule
>>>>>>> f54b1b87e7c1cde66ea5a4bf4ebd847c07605840
  ],
  providers: [
   SettingsService,
   SidebarService,
   SharedService,
<<<<<<< HEAD
   UsuarioService,
   LoginService,
   RolService,
   LoginGuardGuard
=======
   UsuarioService
>>>>>>> f54b1b87e7c1cde66ea5a4bf4ebd847c07605840
  ]
})
export class ServiceModule { }
