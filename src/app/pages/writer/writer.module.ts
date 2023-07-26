import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriterDashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { Mat_Module } from '../../shared/modale/matmodule';
import { Form_Module } from '../../shared/modale/form_module';
import { AdminComponent } from '../dashboard/admin/admin.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProfileComponent } from '../../shared/components/profile/profile.component';



const writerRoutes: Routes = [
  {
    path: '', component: WriterDashboardComponent,
    children: [
      { path: '', component: AdminComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'dash', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'app', loadChildren: () => import('../apps/apps.module').then(m => m.AppsModule) },
      { path: 'file', loadChildren: () => import('../filemanage/filemanage.module').then(m => m.FilemanageModule) },
      { path: 'blog', loadChildren: () => import('../blog/blog.module').then(m => m.BlogModule) },
      { path: 'uielenents', loadChildren: () => import('../uielements/uielements.module').then(m => m.UielementsModule) },
      { path: 'more', loadChildren: () => import('../more/more.module').then(m => m.MoreModule) },
    ]
  }

];

@NgModule({
  declarations: [
    WriterDashboardComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(writerRoutes),
    SharedModule,
    Mat_Module,
    Form_Module,
    MatProgressSpinnerModule
  ],
  exports: [
    RouterModule,
  ]
})
export class WriterModule {

}
