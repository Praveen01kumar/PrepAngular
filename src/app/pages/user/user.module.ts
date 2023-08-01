import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { UserDashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../../shared/auth/auth.guard';
import { RoleGuard } from '../../shared/auth/role.guard';
import { ProfileComponent } from '../../shared/components/profile/profile.component';
import { BlgctgryComponent } from './blgctgry/blgctgry.component';
import { BlgdetailComponent } from './blgdetail/blgdetail.component';
import { MatTooltipModule } from '@angular/material/tooltip';

const userRoutes: Routes = [
  {
    path: '', component: UserComponent, children: [
      { path: '', component: UserDashboardComponent, },
      { path: 'post', component: UserDashboardComponent },
      { path: 'post/:category', component: BlgctgryComponent },
      { path: 'post/:category/:id', component: BlgdetailComponent },
      { path: 'profile', canActivate: [AuthGuard], component: ProfileComponent },
      { path: 'dash', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'app', canActivate: [AuthGuard], loadChildren: () => import('../apps/apps.module').then(m => m.AppsModule) },
      { path: 'file', canActivate: [AuthGuard, RoleGuard], loadChildren: () => import('../filemanage/filemanage.module').then(m => m.FilemanageModule) },
      { path: 'blog', loadChildren: () => import('../blog/blog.module').then(m => m.BlogModule) },
      { path: 'uielenents', canActivate: [AuthGuard, RoleGuard], loadChildren: () => import('../uielements/uielements.module').then(m => m.UielementsModule) },
      { path: 'more', loadChildren: () => import('../more/more.module').then(m => m.MoreModule) },
    ]
  }
];

@NgModule({
  declarations: [
    UserComponent,
    UserDashboardComponent,
    BlgctgryComponent,
    BlgdetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    SharedModule,
    MatTooltipModule
  ],
  exports: [
    RouterModule
  ]
})
export class UserModule { }
