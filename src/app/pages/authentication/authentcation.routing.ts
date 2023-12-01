import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { Page404Component } from './page404/page404.component';
import { Page403Component } from './page403/page403.component';
import { Page500Component } from './page500/page500.component';
import { Page503Component } from './page503/page503.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const AuthenRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'lockscreen', component: LockscreenComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'fpassword', component: ForgotPasswordComponent },
    { path: 'p404', component: Page404Component },
    { path: 'p403', component: Page403Component },
    { path: 'p500', component: Page500Component },
    { path: 'p503', component: Page503Component },
];


@NgModule({
    imports: [RouterModule.forChild(AuthenRoutes)],
    exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
