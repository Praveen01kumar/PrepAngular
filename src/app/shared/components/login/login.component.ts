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
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private _unsubscribeAll: Subject<any> = new Subject<any>();
  isLoading: boolean = false;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    public apiService: ApiService,
    public sharedService: SharedService,
    private authService: AuthService,
    public dialog: MatDialog
  ) {
    this.lrRouter = this.router?.url;
  }

  lrRouter: string = '';
  RegisterForm: FormGroup | any;
  loginForm: FormGroup | any;
  sub: boolean = false;
  sub1: boolean = false;
  sub2: boolean = false;
  ermsg: any = msg;
  resend: boolean = false;
  forgotForm!: FormGroup;
  resetDialog!: MatDialogRef<any>;

  ngOnInit(): void {
    this.userRegisterForm();
    this.userLoginForm();
    this.userforgotForm();

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
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16), spaceNotAllowed, passStrenValidator]],
      confirm_password: ['', [Validators.required]],
      // phone: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(14), onlyNumAllowed]],
      // address: ['', [Validators.required, Validators.minLength(3)]],
      // city: ['', [Validators.required]],
      // state: ['', [Validators.required]],
      // zip_code: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6), onlyNumAllowed]],
      // country: ['', [Validators.required]],
    },
      { validator: mustMatch('password', 'confirm_password') });
  }

  userforgotForm() {
    this.forgotForm = this.fb.group({
      userInput: ['', [Validators.required]],
    });
  }

  userLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, spaceNotAllowed, Validators.email, emailValidator]],
      password: ['', [Validators.required]],
      remember_me: [''],
      otp: ['', [Validators.required]]
    });
  }

  get f() { return this.RegisterForm?.controls }
  get f1() { return this.loginForm?.controls }
  get f2() { return this.forgotForm?.controls }

  onRegister() {
    this.sub = true;
    if (this.RegisterForm?.invalid) {
      return;
    }
    const fval = this.RegisterForm?.value;
    // const payload = { first_name: fval?.first_name, last_name: fval?.last_name, email: fval?.email, username:fval.username, phone: fval?.phone, password: fval?.password, address: fval?.address, city: fval?.city, state: fval?.state, zip_code: fval?.zip_code, country: fval?.country }
    const payload = { first_name: fval?.first_name, last_name: fval?.last_name, email: fval?.email, username: fval.username, password: fval?.password }
    this.isLoading = true;
    this.apiService.registorUser(payload).pipe(takeUntil(this._unsubscribeAll), finalize(() => { this.isLoading = false; })).subscribe((val: any) => {
      if (val?.status) {
        this.sharedService.snake({ message: val?.message });
        this.router.navigate(['/login']);
        this.RegisterForm?.reset();
        this.sub = false;
      }
    }, (error) => {
      this.isLoading = false;
      this.sharedService.snake({ message: error?.error?.message });
    });
  }

  onLogin() {
    this.sub1 = true;
    if (this.loginForm?.invalid) {
      return;
    }
    const payload = {
      username: this.loginForm?.value?.username,
      password: this.loginForm?.value?.password,
      otp: this.loginForm?.value?.otp
    }
    this.isLoading = true;
    this.apiService.loginUser(payload).pipe(takeUntil(this._unsubscribeAll), finalize(() => { this.isLoading = false; })).subscribe((val: any) => {
      if (val?.status) {
        this.sharedService.snake({ message: val?.message });
        localStorage.setItem('token', this.authService.enCrypt(val?.token));
        localStorage.setItem('user', this.authService.enCrypt(JSON.stringify(val?.user)));
        this.router.navigate(['/']);
        this.loginForm?.reset();
        this.sub1 = false;
      }
    }, (error) => {
      this.isLoading = false;
      this.sharedService.snake({ message: error?.error?.message });
    });
  }

  trigger(event: any, form: any) {
    const inputValue = event?.target?.value;
    const result = inputValue?.charAt(0)?.toUpperCase() + inputValue?.slice(1);
    const targetControl = event?.target?.id === 'firstname' ? 'first_name' : event?.target?.id === 'lastname' ? 'last_name' : null;
    form?.get(targetControl)?.setValue(result);
  }

  sendOTP() {
    const payload = { email: this.loginForm?.value?.username, username: null };
    this.isLoading = true;
    this.apiService.loginOTP(payload).pipe(takeUntil(this._unsubscribeAll), finalize(() => { this.isLoading = false; })).subscribe((val: any) => {
      if (val?.status) {
        this.resend = true;
        this.sharedService.snake({ message: val?.message });
      }
    }, (error) => {
      this.isLoading = false;
      this.sharedService.snake({ message: error?.error?.message });
    });
  }

  resetPassMail() {
    this.sub2 = true;
    if (this.forgotForm?.invalid) { return; };
    const value = this.forgotForm.value?.userInput;
    const payload = { email: null, username: null };
    if (value?.includes('@')) { payload.email = value; } else { payload.username = value; }
    this.isLoading = true;
    this.apiService.resetMail(payload).pipe(takeUntil(this._unsubscribeAll), finalize(() => { this.isLoading = false; })).subscribe((val: any) => {
      if (val?.status) {
        this.sharedService.snake({ message: val?.message });
        this.forgotForm?.reset();
        this.sub2 = false;
        this.resetDialog.close();
      }
    }, (error) => {
      this.isLoading = false;
      this.sharedService.snake({ message: error?.error?.message });
    });

  }

  openDialog(templateRef: any) {
    this.resetDialog = this.dialog.open(templateRef, {
      width: '30%'
    });
  }

}
