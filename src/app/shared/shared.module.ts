import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';
import { Mat_Module } from './modale/matmodule';
import { SharedService } from './services/shared.service';
import { UserlogComponent } from './dialog/userlog/userlog.component';
import { Form_Module } from './modale/form_module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
import { LoaderComponent } from './components/loader/loader.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { SotialLinkComponent } from './components/sotial-link/sotial-link.component';
import { ModalLayoutComponent } from './components/modal-layout/modal-layout.component';
import { CreatecollComponent } from './dialog/createcoll/createcoll.component';
import { CommingsoonComponent } from './components/commingsoon/commingsoon.component';
import { DashelementComponent } from './components/dashelement/dashelement.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({

    declarations: [
        HeaderComponent,
        FooterComponent,
        NotfoundComponent,
        DragDropComponent,
        UserlogComponent,
        SidebarComponent,
        LoginComponent,
        ProfileComponent,
        LoaderComponent,
        BreadcrumbsComponent,
        SotialLinkComponent,
        ModalLayoutComponent,
        CreatecollComponent,
        CommingsoonComponent,
        DashelementComponent,
    ],
    imports: [
        CommonModule,
        Mat_Module,
        Form_Module,
        RouterModule,
        HttpClientModule,
        MatTooltipModule
    ],
    exports: [
        CommonModule,
        HeaderComponent,
        FooterComponent,
        DragDropComponent,
        UserlogComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        LoaderComponent,
        CommingsoonComponent,
        DashelementComponent
        
    ],
    providers: [
        SharedService,
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},    
      ]

})
export class SharedModule { }