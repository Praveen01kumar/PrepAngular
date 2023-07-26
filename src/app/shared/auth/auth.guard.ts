import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { SharedService } from '../services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router, 
    private authService: AuthService,
    public sharedService: SharedService
    ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService.isLogined()){
        return true;
      }else{
        this.sharedService.snake({ message: 'You Need To Login!' });
        this.router.navigate(['/login']);
        return false;
      }
  }
  

}
