import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Form_Module } from 'src/app/shared/modale/form_module';
import { Mat_Module } from 'src/app/shared/modale/matmodule';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminComponent } from './admin/admin.component';
import { DemographicComponent } from './demographic/demographic.component';
import { HospitalComponent } from './hospital/hospital.component';
import { UniversityComponent } from './university/university.component';
import { RealestateComponent } from './realestate/realestate.component';
import { ProjectComponent } from './project/project.component';
import { CryptocurrencyComponent } from './cryptocurrency/cryptocurrency.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { IotComponent } from './iot/iot.component';
import { PhoneFormatPipe } from 'src/app/shared/pipes/num-format';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';


const writerRoutes: Routes = [

  { path: '', component: AdminComponent },
  { path: 'analytical', component: AdminComponent },
  { path: 'demographic', component: DemographicComponent },
  { path: 'hospital', component: HospitalComponent },
  { path: 'university', component: UniversityComponent },
  { path: 'realestate', component: RealestateComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'cryptocurrency', component: CryptocurrencyComponent },
  { path: 'ecommerce', component: ECommerceComponent },
  { path: 'iot', component: IotComponent },

];


@NgModule({
  declarations: [
    AdminComponent,
    DemographicComponent,
    HospitalComponent,
    UniversityComponent,
    RealestateComponent,
    ProjectComponent,
    CryptocurrencyComponent,
    ECommerceComponent,
    IotComponent,
    PhoneFormatPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(writerRoutes),
    Form_Module,
    Mat_Module,
    SharedModule,
    MatTableModule,
    MatSortModule,

  ]
})
export class DashboardModule { }
