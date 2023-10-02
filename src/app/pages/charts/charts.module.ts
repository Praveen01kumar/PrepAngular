import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartJSComponent } from './chart-js/chart-js.component';
import { M2chartComponent } from './m2chart/m2chart.component';
import { HeightchartComponent } from './heightchart/heightchart.component';
import { GooglechartComponent } from './googlechart/googlechart.component';
import { ChartsRoutingModule } from './chart.routing';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ChartJSComponent,
    M2chartComponent,
    HeightchartComponent,
    GooglechartComponent
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    SharedModule
  ]
})
export class ChartsModule { }
