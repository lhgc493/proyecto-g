import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/index.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(public usuService: UsuarioService) { }

  ngOnInit() {
  }

}
