import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics/statistics.component';
import { DataComponent } from './data/data.component';
import { ChartComponent } from './chart/chart.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialComponent } from './social/social.component';
import { WidgetsRoutingModule } from './widgets.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    StatisticsComponent,
    DataComponent,
    ChartComponent,
    WeatherComponent,
    SocialComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    WidgetsRoutingModule,
    SharedModule
  ]
})
export class WidgetsModule { }
