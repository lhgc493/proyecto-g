import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { SidebarService, UsuarioService } from '../../services/index.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';

=======
import { SidebarService } from '../../services/index.service';
>>>>>>> f54b1b87e7c1cde66ea5a4bf4ebd847c07605840

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  
<<<<<<< HEAD

  constructor( public sidebar: SidebarService, public usuService: UsuarioService, private router: Router) { }
 
=======
  // tslint:disable-next-line: variable-name
  constructor( public sidebar: SidebarService) { }

>>>>>>> f54b1b87e7c1cde66ea5a4bf4ebd847c07605840
  ngOnInit() {
  }

}
