import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WriterDashboardComponent } from './dashboard/dashboard.component';
import { AnalyticalComponent } from '../dashboard/analytical/analytical.component';
import { ProfileComponent } from 'src/app/shared/components/profile/profile.component';

export const writerRoutes: Routes = [
    {
      path: '', component: WriterDashboardComponent,
      children: [
        { path: '', component: AnalyticalComponent },
        { path: 'profile', component: ProfileComponent },
        { path: 'dash', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule) },
        { path: 'app', loadChildren: () => import('../apps/apps.module').then(m => m.AppsModule) },
        { path: 'file', loadChildren: () => import('../filemanage/filemanage.module').then(m => m.FilemanageModule) },
        { path: 'blog', loadChildren: () => import('../blog/blog.module').then(m => m.BlogModule) },
        { path: 'uielenents', loadChildren: () => import('../uielements/uielements.module').then(m => m.UielementsModule) },
        { path: 'more', loadChildren: () => import('../more/more.module').then(m => m.MoreModule) },
        { path: 'authentication', loadChildren: () => import('../authentication/authentication.module').then(m => m.AuthenticationModule) },
        { path: 'charts', loadChildren: () => import('../charts/charts.module').then(m => m.ChartsModule) },
        { path: 'draganddrop', loadChildren: () => import('../dragndrop/dragndrop.module').then(m => m.DragndropModule) },
        { path: 'forms', loadChildren: () => import('../forms/forms.module').then(m => m.FormsModule) },
        { path: 'maps', loadChildren: () => import('../maps/maps.module').then(m => m.MapsModule) },
        { path: 'menulevel1', loadChildren: () => import('../menulevel1/menulevel1.module').then(m => m.Menulevel1Module) },
        { path: 'menulevel2', loadChildren: () => import('../menulevel2/menulevel2.module').then(m => m.Menulevel2Module) },
        { path: 'pages', loadChildren: () => import('../pages/pages.module').then(m => m.PagesModule) },
        { path: 'tables', loadChildren: () => import('../tables/tables.module').then(m => m.TablesModule) },
        { path: 'widgets', loadChildren: () => import('../widgets/widgets.module').then(m => m.WidgetsModule) }
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(writerRoutes)],
  exports: [RouterModule]
})
export class WriterRoutingModule { }
