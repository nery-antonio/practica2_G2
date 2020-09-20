import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { User } from 'src/app/models/Users';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  constructor(private router: Router, public loginService: LoginService) {

  }


  ngOnInit(): void {
  }

  public iniciarSesion() {
    localStorage.removeItem('mail');
    if (this.comprobarCampos(this.email, this.password)) {
      if (this.comprobarEmail(this.email) == 1) {
        let usuario: User = this.loginService.getUser(this.email, this.password);
        if (usuario != null) {
          localStorage.setItem('mail', this.email);
          if (usuario.tipo == 'Admin') {
            //aca se redirecciona al panel de admin
            this.router.navigate(['/crearsuscripcion']);

          } else {
            //aca se redirecciona al panel de normal
            this.router.navigate(['/register']);
          }
          return 'En Buen Estado';
        }
      }
    }
    return 'En Mal Estado';
  }

  public comprobarCampos(email, password) {
    if (email == '') {
      alert('Llene el campo de correo electronico')
      return false;
    } else if (password == '') {
      alert('Llene el campo contrasenia');
      return false;
    }
    return true;
  }

  public comprobarEmail(email: string) {
    let dominio: string[] = email.split('@');
    if (dominio[1] == 'gmail.com') {
      return 1;
    } else if (dominio[1] == 'hotmail.com') {
      return 1;
    } else if (dominio[1] == 'mail.com') {
      return 1;
    } else {
      return undefined;
    }
  }

  public irRegistrarse() {

    this.router.navigate(['/register']);

  }


}
