import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { Page404Component } from './page404/page404.component';
import { Page403Component } from './page403/page403.component';
import { Page500Component } from './page500/page500.component';
import { Page503Component } from './page503/page503.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationRoutingModule } from './authentcation.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    LockscreenComponent,
    ForgotPasswordComponent,
    Page404Component,
    Page403Component,
    Page500Component,
    Page503Component,
    LoginComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule
  ]
})
export class AuthenticationModule { }
