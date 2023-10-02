import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragndropComponent } from './dragndrop/dragndrop.component';

export const gragndRoutes: Routes = [
    { path: 'dashboard', component: DragndropComponent },
    { path: 'drag1', component: DragndropComponent },
];

@NgModule({
    imports: [RouterModule.forChild(gragndRoutes)],
    exports: [RouterModule]
})
export class DragnDropRoutingModule { }
