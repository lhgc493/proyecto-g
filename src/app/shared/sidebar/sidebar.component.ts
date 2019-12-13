import { Component, OnInit } from '@angular/core';
import { SidebarService, UsuarioService } from '../../services/index.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  

  constructor( public sidebar: SidebarService, public usuService: UsuarioService, private router: Router) { }
 
  ngOnInit() {
  }

}
