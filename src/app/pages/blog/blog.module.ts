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


const BlogRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'newpost', component: NewpostComponent },
  { path: 'bloglist', component: BloglistComponent },
  { path: 'blogdetail', component: BlogdetailComponent },

]


@NgModule({
  declarations: [
    DashboardComponent,
    NewpostComponent,
    BloglistComponent,
    BlogdetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(BlogRoutes),
    Form_Module,
    Mat_Module,
    CKEditorModule,
  ],
  exports: [
    RouterModule,
  ]
})

export class BlogModule { }
