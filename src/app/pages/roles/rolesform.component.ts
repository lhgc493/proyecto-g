import { Component, OnInit } from '@angular/core';
import { RolService } from 'src/app/services/index.service';
import { Rol } from '../../models/rol';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-rolesform',
  templateUrl: './rolesform.component.html',
  styles: []
})
export class RolesformComponent implements OnInit {

  constructor(private rolService: RolService, private router: Router, private activatedRouter: ActivatedRoute) { }

 private rol: Rol = new Rol();

  ngOnInit() {
    this.cargarEntity();
  }

  cargarEntity(): void {
    this.activatedRouter.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.rolService.getRol(id).subscribe( (rol) => this.rol = rol);
      }
    });
  }


  public create(): void {
    this.rolService.create(this.rol).subscribe(rol => {
      this.router.navigate(['/rol']);
      swal('Nuevo rol', `${rol.descripcion} ha sido creado con exito`, 'success' );
    });
  }

  update(): void {
    this.rolService.update(this.rol).subscribe(
      rol => {
        this.router.navigate(['/rol']);
        swal('Editar rol', `Rol ${rol.descripcion} editado con exito`, 'success');
      }
    );
  }

}
