import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  catagArr: any[] = [
    { name: 'Form Validation', url: 'fvalidation' },
    { name: 'Advanced Elements', url: 'aelements' },
    { name: 'Basic Elements', url: 'belements' },
    { name: 'Form Wizard', url: 'fwizard' },
    { name: 'Drag & Drop Upload', url: 'ddupload' },
    { name: 'Image Cropping', url: 'icropping' },
    { name: 'Summer note', url: 'summernote' },
    { name: 'CKEditor', url: 'ckeditor' },
    { name: 'Markdown', url: 'markdown' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
