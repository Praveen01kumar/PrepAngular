import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  catagArr: any[] = [
    { name: 'Typography', url: 'typogrf' },
    { name: 'Tabs', url: 'tabs' },
    { name: 'Buttons', url: 'buttons' },
    { name: 'Bootstrapui', url: 'bootstrapui' },
    { name: 'Icons', url: 'icons' },
    { name: 'Notifications', url: 'notifications' },
    { name: 'Colors', url: 'colors' },
    { name: 'Dialogs', url: 'dialogs' },
    { name: 'Listgroup', url: 'listgroup' },
    { name: 'Mediaobject', url: 'mediaobject' },
    { name: 'Modals', url: 'modals' },
    { name: 'Nestable', url: 'nestable' },
    { name: 'Progressbar', url: 'progressbar' },
    { name: 'Rangesliders', url: 'rangesliders' },
    { name: 'Treeview', url: 'treeview' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
