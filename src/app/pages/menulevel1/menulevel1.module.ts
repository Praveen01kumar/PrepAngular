import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu1Component } from './menu1/menu1.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const menu1Routes: Routes = [
  { path: 'dashboard', component: Menu1Component },
  { path: 'level1', component: Menu1Component },
];

@NgModule({
  declarations: [
    Menu1Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(menu1Routes),
    SharedModule
  ]
})
export class Menulevel1Module { }
