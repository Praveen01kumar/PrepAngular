import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleMapComponent } from './google-map/google-map.component';
import { YandexMapComponent } from './yandex-map/yandex-map.component';

export const mapsRoutes: Routes = [
    { path: 'dashboard', component: GoogleMapComponent },
    { path: 'gmap', component: GoogleMapComponent },
    { path: 'ymap', component: YandexMapComponent }
];


@NgModule({
    imports: [RouterModule.forChild(mapsRoutes)],
    exports: [RouterModule]
})
export class MapsRoutingModule { }
