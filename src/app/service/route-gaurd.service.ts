import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardCodedAuthenticationService } from './hard-coded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGaurdService implements CanActivate{

  constructor(private hardCodedAuthenticationService:HardCodedAuthenticationService,
    private route:Router)
   { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.hardCodedAuthenticationService.isUserLoggedIn()){
      console.log("ROute work")
      return true
    }
    console.log("not work")
    this.route.navigate(['login'])
    return false
  }
}
