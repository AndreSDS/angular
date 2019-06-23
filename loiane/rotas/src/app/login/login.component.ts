import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 usuario: Usuario = new Usuario();

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

fazerLogin() {
  this.authservice.fazerLogin(this.usuario);
  }
}
