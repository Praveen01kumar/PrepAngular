import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';


const modules = [
  FormsModule,
  ReactiveFormsModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules]
})

export class Form_Module {}