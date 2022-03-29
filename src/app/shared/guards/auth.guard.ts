import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router ){

  }

  canActivate(): boolean {
    if(this.authService.isUserLogged){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
