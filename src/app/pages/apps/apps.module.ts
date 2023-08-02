import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { CalenderComponent } from './calender/calender.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { ContactcardComponent } from './contactcard/contactcard.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { Form_Module } from 'src/app/shared/modale/form_module';

import { FullCalendarModule } from '@fullcalendar/angular';
import { Mat_Module } from 'src/app/shared/modale/matmodule';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AdminComponent } from './admin/admin.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { RoleGuard } from 'src/app/shared/auth/role.guard';

const writerRoutes: Routes = [
  { path: '', component: MailboxComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'mail', component: MailboxComponent },
  { path: 'calender', component: CalenderComponent },
  { path: 'contactlist', component: ContactlistComponent },
  { path: 'contactcard', component: ContactcardComponent },
  { path: 'taskboard', component: TaskboardComponent },
  { path: 'admin', canActivate: [RoleGuard], component: AdminComponent },

];


@NgModule({
  declarations: [
    ChatComponent,
    MailboxComponent,
    CalenderComponent,
    ContactlistComponent,
    ContactcardComponent,
    TaskboardComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(writerRoutes),
    FullCalendarModule,
    Form_Module,
    Mat_Module,
    SharedModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
  ]
})
export class AppsModule { }
