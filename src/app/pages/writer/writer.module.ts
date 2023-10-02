import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriterDashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { Mat_Module } from '../../shared/modale/matmodule';
import { Form_Module } from '../../shared/modale/form_module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { WriterRoutingModule } from './writer.module.routing';

@NgModule({
  declarations: [
    WriterDashboardComponent,
  ],
  imports: [
    CommonModule,
    WriterRoutingModule,
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
