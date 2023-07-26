import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { mustMatch } from '../../services/mustmatch';

@Component({
  selector: 'userlog',
  templateUrl: './userlog.component.html',
  styleUrls: ['./userlog.component.scss']
})
export class UserlogComponent implements OnInit {
  toggaleReg: boolean | any;
  toggaleLog: boolean | any;

  constructor(
    private formbuilder: FormBuilder,
    public dialogRef: MatDialogRef<UserlogComponent>,
    @Inject(MAT_DIALOG_DATA) public inputData: any
  ) { }
  registerForm: FormGroup | any;
  loginForm: FormGroup | any;
  submitted: boolean = false;


  ngOnInit(): void {
    this.registrationForm();
    this.userLoginForm();
    this.getModelData();
  }

  registrationForm() {
    this.registerForm = this.formbuilder.group(
      {
        userName: ["", Validators.required],
        userEmail: ["", Validators.required],
        password: ["", Validators.required],
        confirmPassword: ["", Validators.required],
      }, {
      validator: mustMatch('password', 'confirmPassword')
    }
    );
  }

  userLoginForm() {
    this.loginForm = this.formbuilder.group(
      {
        userEmail: ["", Validators.required],
        password: ["", Validators.required],
        confirmPassword: ["", Validators.required],
      }, {
      validator: mustMatch('password', 'confirmPassword')
    }
    );
  }

  get fcr() { return this.registerForm.controls }
  get fcl() { return this.loginForm.controls }

  registerUser() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }

  loginUser() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }

  getModelData() {
    if (this.inputData?.type == 'Registor') {
      this.toggaleReg = true;
      this.toggaleLog = false;
    }
    if (this.inputData?.type == 'Login') {
      this.toggaleLog = true;
      this.toggaleReg = false;
    }
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
    this.loginForm.reset();
    this.dialogRef.close();
  }

  changeForm() {
    this.toggaleReg ? (this.toggaleReg = false, this.toggaleLog = true) : this.toggaleLog ? (this.toggaleLog = false, this.toggaleReg = true) : null;
    this.submitted = false;
  }

}
