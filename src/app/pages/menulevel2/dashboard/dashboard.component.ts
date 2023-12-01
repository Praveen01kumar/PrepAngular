import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  catagArr: any[] = [
    { name: 'Menu 2', url: 'level2' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
