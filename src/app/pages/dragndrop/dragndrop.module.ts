import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragndropComponent } from './dragndrop/dragndrop.component';
import { DragnDropRoutingModule } from './dragndrop.routing';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    DragndropComponent
  ],
  imports: [
    CommonModule,
    DragnDropRoutingModule,
    SharedModule
  ]
})
export class DragndropModule { }
