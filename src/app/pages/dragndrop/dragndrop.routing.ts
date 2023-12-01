import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragndropComponent } from './dragndrop/dragndrop.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const gragndRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'drag1', component: DragndropComponent },
];

@NgModule({
    imports: [RouterModule.forChild(gragndRoutes)],
    exports: [RouterModule]
})
export class DragnDropRoutingModule { }
