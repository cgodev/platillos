import { Injectable } from '@angular/core';
import User from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLogged = false;

  DUMMIE_USER: User = {
    nombre: 'User',
    apellido: 'Dummie',
    username: 'user',
    email: 'carloshumberto.gomez@globant.com',
    password: 'root'
  }

  constructor() {}

  checkStayLogged(): void{
    let stayLogged = localStorage.getItem('stayLogged');
    if(stayLogged === 'true'){
      this.isUserLogged = true;
    }
  }

  login(user: User, stayLogged: Boolean): Boolean {
    this.isUserLogged = (user.username == this.DUMMIE_USER.username && user.password == this.DUMMIE_USER.password) ? true : false;
    if(this.isUserLogged && stayLogged){
      localStorage.setItem('stayLogged', 'true');
    }
    return this.isUserLogged;
  }
}
