import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { AdvancedElementsComponent } from './advanced-elements/advanced-elements.component';
import { BasicElementsComponent } from './basic-elements/basic-elements.component';
import { FormWizardComponent } from './form-wizard/form-wizard.component';
import { DragnDropUploadComponent } from './dragn-drop-upload/dragn-drop-upload.component';
import { ImageCroppingComponent } from './image-cropping/image-cropping.component';
import { SummernoteComponent } from './summernote/summernote.component';
import { MarkdownComponent } from './markdown/markdown.component';
import { CKEditorComponent } from './ckeditor/ckeditor.component';

export const formsRoutes: Routes = [
    { path: 'dashboard', component: FormValidationComponent },
    { path: 'fvalidation', component: FormValidationComponent },
    { path: 'aelements', component: AdvancedElementsComponent },
    { path: 'belements', component: BasicElementsComponent },
    { path: 'fwizard', component: FormWizardComponent },
    { path: 'ddupload', component: DragnDropUploadComponent },
    { path: 'icropping', component: ImageCroppingComponent },
    { path: 'summernote', component: SummernoteComponent },
    { path: 'ckeditor', component: CKEditorComponent },
    { path: 'markdown', component: MarkdownComponent },
];


@NgModule({
    imports: [RouterModule.forChild(formsRoutes)],
    exports: [RouterModule]
})
export class FormsRoutingModule { }
