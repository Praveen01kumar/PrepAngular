import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  catagArr: any[] = [
    { name: 'Tables Example', url: 'texample' },
    { name: 'Normal Tables', url: 'ntables' },
    { name: 'Jquery Data tables', url: 'jdatatables' },
    { name: 'Editable Tables', url: 'etables' },
    { name: 'Tables Color', url: 'tcolor' },
    { name: 'Table Filter', url: 'tfilter' },
    { name: 'Table dragger', url: 'tdragger' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
