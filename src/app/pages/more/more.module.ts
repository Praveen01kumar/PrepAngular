import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Form_Module } from 'src/app/shared/modale/form_module';
import { Mat_Module } from 'src/app/shared/modale/matmodule';
import { CKEditorModule } from 'ckeditor4-angular';
import { MoredashComponent } from './moredash/moredash.component';
import { AisComponent } from './ais/ais.component';
import { AboutComponent } from './about/about.component';
import { MatTooltipModule } from '@angular/material/tooltip';


const MoreRoutes: Routes = [
  { path: '', component: MoredashComponent },
  { path: 'dashboard', component: MoredashComponent },
  { path: 'about', component: AboutComponent },
  { path: 'ais', component: AisComponent },

]


@NgModule({
  declarations: [
    MoredashComponent,
    AisComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MoreRoutes),
    MatTooltipModule,
    Form_Module,
    Mat_Module,
    CKEditorModule,
  ],
  exports: [
    RouterModule,
  ]
})

export class MoreModule { }
