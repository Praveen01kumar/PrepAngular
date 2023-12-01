import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu2Component } from './menu2/menu2.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';

const menu2Routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'level2', component: Menu2Component },
];

@NgModule({
  declarations: [
    Menu2Component,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(menu2Routes),
    SharedModule
  ]
})
export class Menulevel2Module { }
