import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// servicios centralizados en este modulo
import {
  SettingsService,
  SidebarService,
  SharedService

} from './index.service';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  providers: [
   SettingsService,
   SidebarService,
   SharedService
  ]
})
export class ServiceModule { }
