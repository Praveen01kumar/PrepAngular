import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  catagArr: any[] = [
    { name: 'Statistics', url: 'statistics' },
    { name: 'Data', url: 'data' },
    { name: 'Chart', url: 'chart' },
    { name: 'Weather', url: 'weather' },
    { name: 'Social', url: 'social' },
    { name: 'Blog', url: 'blog' },
    { name: 'Ecommerce', url: 'ecommerce' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
