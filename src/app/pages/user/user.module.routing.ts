import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from 'src/app/shared/components/profile/profile.component';
import { UserComponent } from './user/user.component';
import { UserDashboardComponent } from './dashboard/dashboard.component';
import { BlgctgryComponent } from './blgctgry/blgctgry.component';
import { BlgdetailComponent } from './blgdetail/blgdetail.component';
import { AuthGuard } from 'src/app/shared/auth/auth.guard';
import { RoleGuard } from 'src/app/shared/auth/role.guard';

export const userRoutes: Routes = [
    {
      path: '', component: UserComponent, children: [
        { path: '', component: UserDashboardComponent, },
        { path: 'post', component: UserDashboardComponent },
        { path: 'post/:category', component: BlgctgryComponent },
        { path: 'post/:category/:id', component: BlgdetailComponent },
        { path: 'profile', canActivate: [AuthGuard], component: ProfileComponent },
        { path: 'dash', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule) },
        { path: 'app', canActivate: [AuthGuard], loadChildren: () => import('../apps/apps.module').then(m => m.AppsModule) },
        { path: 'file', canActivate: [AuthGuard, RoleGuard], loadChildren: () => import('../filemanage/filemanage.module').then(m => m.FilemanageModule) },
        { path: 'blog', loadChildren: () => import('../blog/blog.module').then(m => m.BlogModule) },
        { path: 'uielenents', canActivate: [AuthGuard, RoleGuard], loadChildren: () => import('../uielements/uielements.module').then(m => m.UielementsModule) },
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
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
