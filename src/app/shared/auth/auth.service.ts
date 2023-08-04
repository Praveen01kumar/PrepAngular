import { Injectable } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import * as CryptoJS from 'crypto-js';
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

  isAdmin(): boolean {
    const getToken: any = localStorage.getItem('token');
    if(getToken !== null){
      const token = this.decrypt(getToken);
      const decodedPayload = JSON.parse(atob(token.split('.')[1]));
      if (!jwtHelper.isTokenExpired(token) && decodedPayload?.role === 'admin') {
        return true;
      } else {
        this.sharedService.snake({ message: 'You Are Not An Admin!' });
        return false;
      }
    }else{
      this.sharedService.snake({ message: 'You Need To Login!' });
      return false;
    }
  }


  enCrypt(token: string): string {
    return CryptoJS.AES.encrypt(token, environment?.CECRET_KEY).toString();
  }

  decrypt(encToekn: string): string {
    try {
      const decryptedBytes = CryptoJS.AES.decrypt(encToekn, environment?.CECRET_KEY);
      return decryptedBytes.toString(CryptoJS.enc.Utf8);
    } catch (error) {
      return '';
    }
  }

  sessionExp(): boolean {
    const getToken: any = localStorage.getItem('token');
    const token = this.decrypt(getToken);
    if (jwtHelper.isTokenExpired(token)) {
      this.sharedService.snake({ message: "Your Session is Expired!" });
      this.router.navigate(['/login']);
      return true;
    } else {
      return false;
    }
  }

}
