import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { LoginComponent } from './shared/components/login/login.component';
import { NotauthGuard } from './shared/auth/notauth.guard';

const appRoutes: Routes = [
  { path: '', loadChildren: () => import('../app/pages/pages.module').then(m => m.RootPagesModule) },
  { path: 'login', canActivate: [NotauthGuard], component: LoginComponent },
  { path: 'register', canActivate: [NotauthGuard], component: LoginComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
