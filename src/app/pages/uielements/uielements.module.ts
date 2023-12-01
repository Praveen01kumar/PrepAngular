import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypographyComponent } from './typography/typography.component';
import { TabsComponent } from './tabs/tabs.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { BootstrapuiComponent } from './bootstrapui/bootstrapui.component';
import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ColorsComponent } from './colors/colors.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { ListgroupComponent } from './listgroup/listgroup.component';
import { MediaobjectComponent } from './mediaobject/mediaobject.component';
import { ModalsComponent } from './modals/modals.component';
import { NestableComponent } from './nestable/nestable.component';
import { ProgressbarsComponent } from './progressbars/progressbars.component';
import { RangeslidersComponent } from './rangesliders/rangesliders.component';
import { TreeviewComponent } from './treeview/treeview.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';

const UiRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'typogrf', component: TypographyComponent },
      { path: 'tabs', component: TabsComponent },
      { path: 'buttons', component: ButtonsComponent },
      { path: 'bootstrapui', component: BootstrapuiComponent },
      { path: 'icons', component: IconsComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'colors', component: ColorsComponent },
      { path: 'dialogs', component: DialogsComponent },
      { path: 'listgroup', component: ListgroupComponent },
      { path: 'mediaobject', component: MediaobjectComponent },
      { path: 'modals', component: ModalsComponent },
      { path: 'nestable', component: NestableComponent },
      { path: 'progressbar', component: ProgressbarsComponent },
      { path: 'rangesliders', component: RangeslidersComponent },
      { path: 'treeview', component: TreeviewComponent },
    ]
  },
]


@NgModule({
  declarations: [
    TypographyComponent,
    TabsComponent,
    ButtonsComponent,
    BootstrapuiComponent,
    IconsComponent,
    NotificationsComponent,
    ColorsComponent,
    DialogsComponent,
    ListgroupComponent,
    MediaobjectComponent,
    ModalsComponent,
    NestableComponent,
    ProgressbarsComponent,
    RangeslidersComponent,
    TreeviewComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(UiRoutes),
    SharedModule
  ],
  exports: [
    RouterModule,
  ]
})
export class UielementsModule { }
