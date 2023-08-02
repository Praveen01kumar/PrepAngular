import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { mustMatch } from '../../services/mustmatch';
import { passStrenValidator, emailValidator, spaceNotAllowed, numNotAllowed, speCharNotAllowed, onlyNumAllowed, upperValidator, lowerValidator } from '../../services/validistor';
import { msg } from '../../services/error-messages';
import { ApiService } from '../../services/api-service';
import { finalize, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { SharedService } from '../../services/shared.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private _unsubscribeAll: Subject<any> = new Subject<any>();
  isLoading:boolean = false;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    public apiService: ApiService,
    public sharedService: SharedService,
    private authService: AuthService
  ) {
    this.lrRouter = this.router?.url;
  }

  lrRouter: string = '';
  RegisterForm: FormGroup | any;
  loginForm: FormGroup | any;
  sub: boolean = false;
  sub1: boolean = false;
  ermsg: any = msg;

  ngOnInit(): void {
    this.userRegisterForm();
    this.userLoginForm();

  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  userRegisterForm() {
    this.RegisterForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16), speCharNotAllowed, spaceNotAllowed, numNotAllowed]],
      last_name: ['', [Validators.required, Validators.maxLength(16), speCharNotAllowed, numNotAllowed, spaceNotAllowed]],
      email: ['', [Validators.required, Validators.email, emailValidator]],
      username: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(14), upperValidator, lowerValidator, spaceNotAllowed]],
      phone: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(14), onlyNumAllowed]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16), spaceNotAllowed, passStrenValidator]],
      confirm_password: ['', [Validators.required]],
      address: ['', [Validators.required, Validators.minLength(3)]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zip_code: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6), onlyNumAllowed]],
      country: ['', [Validators.required]],
    },
      { validator: mustMatch('password', 'confirm_password') });
  }

  userLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, spaceNotAllowed]],
      password: ['', [Validators.required]],
      remember_me: ['']
    });
  }

  get f() { return this.RegisterForm?.controls }
  get f1() { return this.loginForm?.controls }

  onRegister() {
    this.sub = true;
    if (this.RegisterForm?.invalid) {
      return;
    }
    const fval = this.RegisterForm?.value;
    const payload = { first_name: fval?.first_name, last_name: fval?.last_name, email: fval?.email, username:fval.username, phone: fval?.phone, password: fval?.password, address: fval?.address, city: fval?.city, state: fval?.state, zip_code: fval?.zip_code, country: fval?.country }
    this.isLoading  = true;
    this.apiService.registorUser(payload).pipe(takeUntil(this._unsubscribeAll), finalize(() => { this.isLoading = false; })).subscribe((val: any) => {
      if (val?.status == 1) {
        this.sharedService.snake({ message: val?.message });
        this.router.navigate(['/login']);
        this.RegisterForm?.reset();
        this.sub = false;
      }
    }, (error) => {
      this.isLoading  = false;
      this.sharedService.snake({ message: error?.error?.errors?.message });
    });
  }

  onLogin() {
    this.sub1 = true;
    if (this.loginForm?.invalid) {
      return;
    }
    const payload = {
      username: this.loginForm?.value?.username,
      password: this.loginForm?.value?.password
    }
    this.isLoading  = true;
    this.apiService.loginUser(payload).pipe(takeUntil(this._unsubscribeAll), finalize(() => { this.isLoading = false; })).subscribe((val: any) => {
      if (val?.status == 1) {
        this.sharedService.snake({ message: val?.message });
        localStorage.setItem('token', this.authService.enCrypt(val?.token));
        this.router.navigate(['/']);
        this.loginForm?.reset();
        this.sub1 = false;
      }
    }, (error) => {
      this.isLoading = false; 
      this.sharedService.snake({ message: error?.error?.errors?.message });
    });
  }

  trigger(event: any, form: any) {
    const inputValue = event?.target?.value;
    const result = inputValue?.charAt(0)?.toUpperCase() + inputValue?.slice(1);
    const targetControl = event?.target?.id === 'firstname' ? 'first_name' : event?.target?.id === 'lastname' ? 'last_name' : null;
    form?.get(targetControl)?.setValue(result);
  }



}
