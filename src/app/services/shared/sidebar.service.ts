import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dasboard', url: '/dashboard' },
        { titulo: 'Progress', url: '/progress' },
        { titulo: 'Graficas', url: '/grafica1' },
        { titulo: 'Rxjs', url: '/rxjs' }
      ]
    },
    {
      titulo: 'Registro',
      icono: 'mdi mdi-pencil',
      submenu: [
        { titulo: 'Hotel', url: '/dashboard' },
        { titulo: 'Agencia de viajes', url: '/progress' },
        { titulo: 'Buses', url: '/grafica1' },
      ]
    },
    {
      titulo: 'Mantenimientos',
      icono: 'mdi mdi-wrench',
      submenu: [
        { titulo: 'usuarios', url: '/usuario' },
        { titulo: 'roles', url: '/rol' },
        { titulo: 'hoteles', url: '/hotel' },
        { titulo: 'agencias', url: '/agencia' },
        { titulo: 'buses', url: '/bus' }
      ]
    },

  ];

  constructor() { }
}
