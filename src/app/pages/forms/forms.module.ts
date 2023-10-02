import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { AdvancedElementsComponent } from './advanced-elements/advanced-elements.component';
import { BasicElementsComponent } from './basic-elements/basic-elements.component';
import { FormWizardComponent } from './form-wizard/form-wizard.component';
import { DragnDropUploadComponent } from './dragn-drop-upload/dragn-drop-upload.component';
import { ImageCroppingComponent } from './image-cropping/image-cropping.component';
import { SummernoteComponent } from './summernote/summernote.component';
import { CKEditorComponent } from './ckeditor/ckeditor.component';
import { MarkdownComponent } from './markdown/markdown.component';
import { FormsRoutingModule } from './forms.routing';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    FormValidationComponent,
    AdvancedElementsComponent,
    BasicElementsComponent,
    FormWizardComponent,
    DragnDropUploadComponent,
    ImageCroppingComponent,
    SummernoteComponent,
    CKEditorComponent,
    MarkdownComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    SharedModule
  ]
})
export class FormsModule { }
