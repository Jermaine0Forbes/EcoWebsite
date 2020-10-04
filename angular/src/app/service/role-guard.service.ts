import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate{

  token  = JSON.parse(localStorage.getItem("access_token")) || null;

  constructor(public auth: AuthService, public router: Router) { }

  goToLogin():boolean{
    this.router.navigate(['login']);
    return false;
  }
  canActivate(route:ActivatedRouteSnapshot):boolean{

      const token = this.token;
    // this will be passed from the route config
        // on the data property
        if(token){

          const expectedRole = route.data.expectedRole;
          // decode the token to get its payload
          const tokenPayload = decode(token);
          if (
            !this.auth.isAuthenticated() ||
            tokenPayload.role !== expectedRole
          ) {
            this.goToLogin();
          }
          return true;
        }
        this.goToLogin();
    }

}
