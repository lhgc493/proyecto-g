import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



// servicios centralizados en este modulo
import {
  SettingsService,
  SidebarService,
  SharedService,
  UsuarioService,
  LoginService,
  RolService,
  LoginGuardGuard

} from './index.service';

import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
   SettingsService,
   SidebarService,
   SharedService,
   UsuarioService,
   LoginService,
   RolService,
   LoginGuardGuard
  ]
})
export class ServiceModule { }
