import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Form_Module } from 'src/app/shared/modale/form_module';
import { Mat_Module } from 'src/app/shared/modale/matmodule';
import { CKEditorModule } from 'ckeditor4-angular';
import { MoredashComponent } from './moredash/moredash.component';
import { AisComponent } from './ais/ais.component';
import { AboutComponent } from './about/about.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PassgenComponent } from './passgen/passgen.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { QuizComponent } from './quiz/quiz.component';
import { CollectionComponent } from './collection/collection.component';
import { TodoComponent } from './todo/todo.component';
import { TictactoyComponent } from './tictactoy/tictactoy.component';
import { SearchCollectionPipe } from 'src/app/shared/pipes/search-collection.pipe';
import { SharedModule } from 'src/app/shared/shared.module';


const MoreRoutes: Routes = [
  { path: '', component: MoredashComponent },
  { path: 'dashboard', component: MoredashComponent },
  { path: 'about', component: AboutComponent },
  { path: 'ais', component: AisComponent },
  { path: 'collections', component: CollectionComponent },
  { path: 'pass', component: PassgenComponent },
  { path: 'stopwatch', component: StopwatchComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'tictactoy', component: TictactoyComponent }

]


@NgModule({
  declarations: [
    MoredashComponent,
    AisComponent,
    AboutComponent,
    PassgenComponent,
    StopwatchComponent,
    QuizComponent,
    CollectionComponent,
    TodoComponent,
    TictactoyComponent,
    SearchCollectionPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MoreRoutes),
    MatTooltipModule,
    Form_Module,
    Mat_Module,
    CKEditorModule,
    SharedModule
  ],
  exports: [
    RouterModule,
  ]
})

export class MoreModule { }
