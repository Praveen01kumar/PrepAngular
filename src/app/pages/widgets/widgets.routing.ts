import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsComponent } from './statistics/statistics.component';
import { DataComponent } from './data/data.component';
import { ChartComponent } from './chart/chart.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialComponent } from './social/social.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const widgetsRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'statistics', component: StatisticsComponent },
    { path: 'data', component: DataComponent },
    { path: 'chart', component: ChartComponent },
    { path: 'weather', component: WeatherComponent },
    { path: 'social', component: SocialComponent },
    { path: 'blog', component: SocialComponent },
    { path: 'ecommerce', component: SocialComponent },
];
@NgModule({
    imports: [RouterModule.forChild(widgetsRoutes)],
    exports: [RouterModule]
})
export class WidgetsRoutingModule { }
