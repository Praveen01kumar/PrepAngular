import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DocumentComponent } from './document/document.component';
import { MediaComponent } from './media/media.component';
import { ImagesComponent } from './images/images.component';
import { FilesComponent } from './files/files.component';
import { Mat_Module } from 'src/app/shared/modale/matmodule';

const FileRoutes: Routes = [
  { path: '', component: FilesComponent },
  { path: 'dashboard', component: FilesComponent },
  { path: 'document', component: DocumentComponent },
  { path: 'media', component: MediaComponent },
  { path: 'images', component: ImagesComponent },
];

@NgModule({
  declarations: [
    DocumentComponent,
    MediaComponent,
    ImagesComponent,
    FilesComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(FileRoutes),
    Mat_Module,

  ],
  exports: [
    RouterModule,
  ]
})
export class FilemanageModule { }
