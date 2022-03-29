import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import User from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({})

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(this.authService.isUserLogged){
      this.router.navigate(['/']);
    }
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      stayLogged: new FormControl(false)
    })
  }

  login(){
    if(this.loginForm.valid){
      let user: User = {
        username: this.loginForm.get('username')?.value,
        password: this.loginForm.get('password')?.value
      }
      let stayLogged: Boolean = this.loginForm.get('stayLogged')?.value

      console.log(`Data ${user} --- ${stayLogged}`);

      const response = this.authService.login(user, stayLogged);

      if(response){
        this.router.navigate(['/']);
      }else{
        Swal.fire({
          title: 'Error!',
          text: 'Credenciales incorrectas',
          icon: 'error',
          confirmButtonText: 'Reintentar'
        })
      }
    }else return;
  }

}
