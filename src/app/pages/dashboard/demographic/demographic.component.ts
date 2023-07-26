import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'demographic',
  templateUrl: './demographic.component.html',
  styleUrls: ['./demographic.component.scss']
})
export class DemographicComponent implements OnInit {

  @ViewChild('populationChart', { static: true }) populationChart!: ElementRef;
  popChart!: Chart;
  @ViewChild('usageChart', { static: true }) usageChart!: ElementRef;
  usChart!: Chart;
  @ViewChild('pageviewsChart', { static: true }) pageviewsChart!: ElementRef;
  pagChart!: Chart;
  @ViewChild('growthChart', { static: true }) growthChart!: ElementRef;
  grChart!: Chart;
  @ViewChild('genderChart', { static: true }) genderChart!: ElementRef;
  gnChart!: Chart;
  @ViewChild('browserChart', { static: true }) browserChart!: ElementRef;
  brChart!: Chart;

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }
  createChart() {

    this.popChart = new Chart(this.populationChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
        datasets: [{
          label: "Earnings", data: ['0', '276', '372', '79', '192', '45', '78', '1', '9', '323', '573', '787'],
          backgroundColor: 'rgba(75, 192, 192, 0.6)', borderColor: 'rgba(75, 192, 192, 0.6)',
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

    this.usChart = new Chart(this.usageChart.nativeElement, {
      type: 'pie',
      data: {
        labels: ["2020", "2021", "2022", "2023"],
        datasets: [{
          label: "Earnings", data: ['110', '276', '172', '79'],
          backgroundColor: ['rgba(255, 205, 0, 0.6)', 'rgba(255, 0, 26, 0.6)', 'rgba(4, 0, 255, 0.6)', 'rgba(0, 255, 128, 0.6)'],
          borderColor: ['rgba(255, 205, 0, 0.6)', 'rgba(255, 0, 26, 0.6)', 'rgba(4, 0, 255, 0.6)', 'rgba(0, 255, 128, 0.6)'],
          borderWidth: 0,
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

    this.pagChart = new Chart(this.pageviewsChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
        datasets: [{
          label: "Earnings", data: ['0', '276', '-372', '879', '-192', '145', '-78', '1110', '89', '323', '-573', '787'],
          backgroundColor(context) { const index: number = context?.dataIndex; const value: any = context?.dataset?.data[index]; return value < 0 ? 'rgba(255, 0, 26, 0.6)' : 'rgba(4, 0, 255, 0.6)' },
          borderColor: (context) => { const index: number = context?.dataIndex; const value: any = context?.dataset?.data[index]; return value < 0 ? 'rgba(255, 0, 26, 0.6)' : 'rgba(4, 0, 255, 0.6)' },
          borderWidth: 0,
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

    this.grChart = new Chart(this.growthChart.nativeElement, {
      type: 'line',
      data: {
        labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
        datasets: [{
          label: "Earnings", data: ['0', '276', '372', '79', '192', '45', '78'],
          backgroundColor: 'rgba(255, 0, 26, 0.6)', borderColor: 'rgba(255, 0, 26, 0.6)',
          borderWidth: 1,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 5, transitions: { show: { animations: { x: { from: 0 }, y: { from: 0 } } }, hide: { animations: { x: { to: 0 }, y: { to: 0 } } } },
        scales: { x: { display: false }, y: { display: false }, },
        plugins: { legend: { display: false, }, },
        elements: {
          point: { radius: 0.1 }, line: { tension: 0 }
        }

      }
    });

    this.gnChart = new Chart(this.genderChart.nativeElement, {
      type: 'line',
      data: {
        labels: ["2019", "2020", "2021", "2022", "2023", "2024", "2025"],
        datasets: [
          {
            label: "Male", data: ['0', '276', '372', '79', '192', '545', '78'],
            backgroundColor: '#00bdfb', borderColor: '#00bdfb',
            borderWidth: 1,
          },
          {
            label: "Female", data: ['20', '76', '672', '709', '12', '145', '178'],
            backgroundColor: '#ff68b3', borderColor: '#ff68b3',
            borderWidth: 1,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 5, transitions: { show: { animations: { x: { from: 0 }, y: { from: 0 } } }, hide: { animations: { x: { to: 0 }, y: { to: 0 } } } },
        scales: { x: { display: true, grid: { display: false } }, y: { display: true, ticks: { maxTicksLimit: 5 } } },
        plugins: { legend: { display: true, }, },
        elements: { point: { radius: 3 }, line: { tension: 0.1 } }
      }
    });

    this.brChart = new Chart(this.browserChart.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ["2020", "2021", "2022", "2023"],
        datasets: [{
          label: "Earnings", data: ['110', '276', '172', '79'],
          backgroundColor: ['rgba(255, 205, 0, 0.6)', 'rgba(255, 0, 26, 0.6)', 'rgba(4, 0, 255, 0.6)', 'rgba(0, 255, 128, 0.6)'],
          borderColor: '#fff',
          borderWidth: 1,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 5, transitions: { show: { animations: { x: { from: 0 }, y: { from: 0 } } }, hide: { animations: { x: { to: 0 }, y: { to: 0 } } } },
        scales: { x: { display: false }, y: { display: false }, },
        plugins: { legend: { display: true, }, },

      }
    });

  }


}
