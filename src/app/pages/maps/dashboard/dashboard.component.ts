import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  catagArr: any[] = [
    { name: 'Google Map', url: 'gmap' },
    { name: 'Yandex Map', url: 'ymap' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
