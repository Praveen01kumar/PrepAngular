import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from '../services/shared.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import * as CryptoJS from 'crypto-js';
const jwtHelper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(
    public sharedService: SharedService,
    private router: Router,
  ) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const getToken: any = localStorage.getItem('token');
    // if(getToken !== null){
    //   const token = this.decrypt(getToken);
    //   const decodedPayload = JSON.parse(atob(token.split('.')[1]));
    //   if (!jwtHelper.isTokenExpired(token) && decodedPayload?.role === 'admin') {
    //     return true;
    //   } else {
    //     this.sharedService.snake({ message: 'You Are Not An Admin!' });
    //     this.router.navigate(['/']);
    //     return false;
    //   }
    // }else{
    //   this.sharedService.snake({ message: 'You Need To Login!' });
    //   this.router.navigate(['/login']);
    //   return false;
    // }
    return true;

  }

  decrypt(encToekn: string): string {
    try {
      const decryptedBytes = CryptoJS.AES.decrypt(encToekn, environment?.CECRET_KEY);
      return decryptedBytes.toString(CryptoJS.enc.Utf8);
    } catch (error) {
      return '';
    }
  }

}
