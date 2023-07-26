import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/auth/auth.guard';
import { RoleGuard } from '../shared/auth/role.guard';

export const PagesRoutes: Routes = [
  { path: '', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'writer', canActivate:[AuthGuard, RoleGuard], loadChildren: () => import('./writer/writer.module').then(m => m.WriterModule) },
];

@NgModule({
  imports: [RouterModule.forChild(PagesRoutes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
