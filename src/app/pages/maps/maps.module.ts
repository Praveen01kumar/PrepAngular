import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapComponent } from './google-map/google-map.component';
import { YandexMapComponent } from './yandex-map/yandex-map.component';
import { MapsRoutingModule } from './maps.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    GoogleMapComponent,
    YandexMapComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    SharedModule
  ]
})
export class MapsModule { }
