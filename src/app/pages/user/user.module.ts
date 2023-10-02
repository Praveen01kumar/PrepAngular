import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { UserDashboardComponent } from './dashboard/dashboard.component';
import { BlgctgryComponent } from './blgctgry/blgctgry.component';
import { BlgdetailComponent } from './blgdetail/blgdetail.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UserRoutingModule } from './user.module.routing';



@NgModule({
  declarations: [
    UserComponent,
    UserDashboardComponent,
    BlgctgryComponent,
    BlgdetailComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    MatTooltipModule
  ],
  exports: [
    RouterModule
  ]
})
export class UserModule { }
