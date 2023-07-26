import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'iot',
  templateUrl: './iot.component.html',
  styleUrls: ['./iot.component.scss']
})
export class IotComponent implements OnInit {
  @ViewChild('realestateChart', { static: true }) realestateChart!: ElementRef;
  prdChart!: Chart;
  @ViewChild('line1blogChart', { static: true }) line1blogChart!: ElementRef;
  lbChart1!: Chart;
  @ViewChild('line1Chart', { static: true }) line1Chart!: ElementRef;
  lChart1!: Chart;
  @ViewChild('line2Chart', { static: true }) line2Chart!: ElementRef;
  lChart2!: Chart;
  @ViewChild('line3Chart', { static: true }) line3Chart!: ElementRef;
  lChart3!: Chart;
  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }
  createChart() {
    this.prdChart = new Chart(this.realestateChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [{
          label: 'Income',
          data: ['100', '76', '32', '79', '892', '574', '473'],
          backgroundColor: 'rgba(75, 192, 192, 0.6)', borderColor: 'rgba(75, 192, 192, 0.6)',
        },
        {
          label: 'Courses',
          data: ['10', '276', '37', '79', '92', '574', '173'],
          backgroundColor: 'rgba(192, 75, 192, 0.6)', borderColor: 'rgba(192, 75, 192, 0.6)',
        },
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 5, transitions: { show: { animations: { x: { from: 0 }, y: { from: 0 } } }, hide: { animations: { x: { to: 0 }, y: { to: 0 } } } },
        scales: { x: { grid: { display: true } }, y: { grid: { display: false } } },
        interaction: { intersect: false, },
        plugins: { legend: { display: false, }, },
      }
    });
    this.lbChart1 = new Chart(this.line1blogChart.nativeElement, {
      type: 'pie',
      data: {
        labels: ["Overall", "2016", "2017"],
        datasets: [{
          label: "Likes", data: ['276', '372', '192'],
          backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(243, 219, 127, 0.6)', 'rgba(159, 0, 127, 0.6)'], borderColor: ['rgba(75, 192, 192, 0.6)', 'rgba(243, 219, 127, 0.6)', 'rgba(159, 0, 127, 0.6)'],
          borderWidth: 1,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 5, transitions: { show: { animations: { x: { from: 0 }, y: { from: 0 } } }, hide: { animations: { x: { to: 0 }, y: { to: 0 } } } },
        scales: { x: { display: false }, y: { display: false }, },
        plugins: { legend: { display: false, }, },

      }
    });
        //chaert 1
        this.lChart1 = new Chart(this.line1Chart.nativeElement, {
          type: 'line',
          data: {
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [{
              label: "Earnings", data: ['0', '276', '372', '79', '192', '574', '573'],
              backgroundColor: 'rgba(75, 192, 192, 0.6)', borderColor: 'rgba(75, 192, 192, 0.6)', fill: true, tension: 0.2,
              borderWidth: 1, pointRadius: 1,
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            aspectRatio: 5, transitions: { show: { animations: { x: { from: 0 }, y: { from: 0 } } }, hide: { animations: { x: { to: 0 }, y: { to: 0 } } } },
            scales: { x: { display: false }, y: { display: false }, },
            plugins: { legend: { display: false, }, },
    
          }
        });
        //chart 2
    
        this.lChart2 = new Chart(this.line2Chart.nativeElement, {
          type: 'line',
          data: {
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [{
              label: "Sales", data: ['990', '576', '372', '79', '192', '574', '873'],
              backgroundColor: 'rgba(243, 219, 127, 0.6)', borderColor: 'rgba(243, 219, 127, 0.6)', fill: true, tension: 0.2,
              borderWidth: 1, pointRadius: 1,
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            aspectRatio: 5, transitions: { show: { animations: { x: { from: 0 }, y: { from: 0 } } }, hide: { animations: { x: { to: 0 }, y: { to: 0 } } } },
            scales: { x: { display: false }, y: { display: false }, },
            plugins: { legend: { display: false, }, },
          }
        });
    
        //chart 3
        this.lChart3 = new Chart(this.line3Chart.nativeElement, {
          type: 'line',
          data: {
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [{
              label: "Visits", data: ['0', '276', '372', '879', '592', '174', '0'],
              backgroundColor: 'rgba(159, 0, 127, 0.6)', borderColor: 'rgba(159, 0, 127, 0.6)', fill: true, tension: 0.2,
              borderWidth: 1, pointRadius: 1,
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            aspectRatio: 5, transitions: { show: { animations: { x: { from: 0 }, y: { from: 0 } } }, hide: { animations: { x: { to: 0 }, y: { to: 0 } } } },
            scales: { x: { display: false }, y: { display: false }, },
            plugins: { legend: { display: false, }, },
          }
        });
  }

}
