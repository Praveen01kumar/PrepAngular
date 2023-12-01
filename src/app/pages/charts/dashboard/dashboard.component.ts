import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  catagArr: any[] = [
    { name: 'ChartJS', url: 'chartjs' },
    { name: 'M2chart', url: 'm2chart' },
    { name: 'Heightchart', url: 'heightchart' },
    { name: 'Googlechart', url: 'googlechart' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
