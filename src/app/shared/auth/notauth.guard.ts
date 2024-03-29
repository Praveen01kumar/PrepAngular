import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { SharedService } from '../services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class NotauthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
    public sharedService: SharedService,
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // if (this.authService.isLogined()) {
    //   this.router.navigate(['/']);
    //   this.sharedService.snake({ message: 'You Are Alreay Logedin!' });
    //   return false;
    // } else {
    //   return true;
    // }
    return true;
  }

}
