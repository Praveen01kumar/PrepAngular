import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';
const jwtHelper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public sharedService: SharedService,
    private router: Router,
    ) { 
    this.sessionExp();
  }

  isLogined(): boolean {
    const getToken: any = localStorage.getItem('token');
    if (getToken) {
      const token = this.decrypt(getToken);
      try {
        return !jwtHelper.isTokenExpired(token);
      } catch (error) {
        return false;
      }
    } else {
      return false;
    }
  }

  enCrypt(token: string): string {
    return CryptoJS.AES.encrypt(token, 'preAngular').toString();
  }

  decrypt(encToekn: string): string {
    try {
      const decryptedBytes = CryptoJS.AES.decrypt(encToekn, 'preAngular');
      return decryptedBytes.toString(CryptoJS.enc.Utf8);
    } catch (error) {
      return '';
    }
  }

  sessionExp():boolean{
    const getToken: any = localStorage.getItem('token');
    const token = this.decrypt(getToken);
    if(jwtHelper.isTokenExpired(token)){
      this.sharedService.snake({ message: "Your Session is Expired!" });
      this.router.navigate(['/login']);
      return true;
    }else{
      return false;
    }
  }

}
