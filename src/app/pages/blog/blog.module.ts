import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewpostComponent } from './newpost/newpost.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { RouterModule, Routes } from '@angular/router';
import { Form_Module } from 'src/app/shared/modale/form_module';
import { Mat_Module } from 'src/app/shared/modale/matmodule';
import { CKEditorModule } from 'ckeditor4-angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { RoleGuard } from 'src/app/shared/auth/role.guard';

const BlogRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'newpost', canActivate: [RoleGuard], component: NewpostComponent },
  { path: 'bloglist', component: BloglistComponent },
  { path: 'blogdetail/:id', component: BlogdetailComponent },
  { path: 'blogdetail', redirectTo: 'bloglist', pathMatch: 'full' },
]


@NgModule({
  declarations: [
    DashboardComponent,
    NewpostComponent,
    BloglistComponent,
    BlogdetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(BlogRoutes),
    Form_Module,
    Mat_Module,
    CKEditorModule,
    SharedModule
  ],
  exports: [
    RouterModule,
  ]
})

export class BlogModule { }
