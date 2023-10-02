import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartJSComponent } from './chart-js/chart-js.component';
import { M2chartComponent } from './m2chart/m2chart.component';
import { HeightchartComponent } from './heightchart/heightchart.component';
import { GooglechartComponent } from './googlechart/googlechart.component';

export const chartRoutes: Routes = [
    { path: 'dashboard', component: ChartJSComponent },
    { path: 'chartjs', component: ChartJSComponent },
    { path: 'm2chart', component: M2chartComponent },
    { path: 'heightchart', component: HeightchartComponent },
    { path: 'googlechart', component: GooglechartComponent },
];


@NgModule({
    imports: [RouterModule.forChild(chartRoutes)],
    exports: [RouterModule]
})
export class ChartsRoutingModule { }
