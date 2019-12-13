import { Component, OnInit } from '@angular/core';
import { RolService } from 'src/app/services/index.service';

import { Rol } from 'src/app/models/rol';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styles: []
})
export class RolesComponent implements OnInit {

  constructor(private rolService: RolService) { }

  roles: Rol[];
  rol = new Rol();

  cargando: boolean = true;
  p: number = 1; // paginacion empieza en 1
  ngOnInit() {
    this.rolService.getRoles().subscribe(
      roles => {
        this.roles = roles;
        this.cargando = false;
      }
    );
  }

  rolXdes(des: string): void {
    this.rolService.getRoldescripcion(des).subscribe((rol) => this.rol = rol);
  }
  
 
  
  

}
