import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu1Component } from './menu1/menu1.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';

const menu1Routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'level1', component: Menu1Component },
];

@NgModule({
  declarations: [
    Menu1Component,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(menu1Routes),
    SharedModule
  ]
})
export class Menulevel1Module { }
