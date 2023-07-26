import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto'
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  stroksValue1: any;
  stroksValue2: any;
  stroksValue3: any;
  stroksValue4: any;
  @ViewChild('line1blogChart', { static: true }) line1blogChart!: ElementRef;
  lbChart1!: Chart;
  @ViewChild('line2blogChart', { static: true }) line2blogChart!: ElementRef;
  lbChart2!: Chart;
  @ViewChild('line3blogChart', { static: true }) line3blogChart!: ElementRef;
  lbChart3!: Chart;
  @ViewChild('line4blogChart', { static: true }) line4blogChart!: ElementRef;
  lbChart4!: Chart;
  @ViewChild('categoriesChart', { static: true }) categoriesChart!: ElementRef;
  cgChart!: Chart;
  @ViewChild('visitDeviceChart', { static: true }) visitDeviceChart!: ElementRef;
  vdChart!: Chart;

  constructor(private meta: Meta, private siteTitle: Title) { }

  ngOnInit(): void {
    this.createChart();
    this.functionsdsdf();
  }
  createChart() {
    this.lbChart1 = new Chart(this.line1blogChart.nativeElement, {
      type: 'line',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Oct", "Dec"],
        datasets: [{
          label: "Likes", data: ['0', '276', '372', '79', '192', '574', '573', '0', '276', '372', '79', '192'],
          backgroundColor: 'rgba(75, 192, 192, 0.6)', borderColor: 'rgba(75, 192, 192, 0.6)', fill: true, tension: 0.1,
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

    this.lbChart2 = new Chart(this.line2blogChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Oct", "Dec"],
        datasets: [{
          label: "Comments", data: ['90', '576', '372', '79', '192', '574', '873', '990', '576', '372', '79', '192'],
          backgroundColor: 'rgba(243, 219, 127, 0.6)', borderColor: 'rgba(243, 219, 127, 0.6)',
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

    this.lbChart3 = new Chart(this.line3blogChart.nativeElement, {
      type: 'line',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Oct", "Dec"],
        datasets: [{
          label: "Share", data: ['0', '276', '372', '879', '592', '174', '0', '276', '372', '879', '592', '174',],
          backgroundColor: 'rgba(159, 0, 127, 0.6)', borderColor: 'rgba(159, 0, 127, 0.6)', fill: false,
          borderWidth: 2, pointRadius: 2,
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

    this.lbChart4 = new Chart(this.line4blogChart.nativeElement, {
      type: 'bar',
      data: {
        labels: [
          "01-03-2023", "02-03-2023", "03-03-2023", "04-03-2023", "05-03-2023", "06-03-2023", "07-03-2023",
          "08-03-2023", "09-03-2023", "10-03-2023", "11-03-2023", "12-03-2023", "13-03-2023", "14-03-2023",
          "15-03-2023", "16-03-2023", "17-03-2023", "18-03-2023", "19-03-2023", "20-03-2023", "21-03-2023",
          "22-03-2023", "23-03-2023", "24-03-2023", "25-03-2023", "26-03-2023", "27-03-2023", "28-03-2023",
          "29-03-2023", "30-03-2023", "31-03-2023"
        ],
        datasets: [{
          label: "View", data: ['73', '376', '272', '79', '192', '74', '0', '79', '192', '74', '40', '573', '376', '272', '79', '192', '74', '30', '79', '192', '74', '20', '79', '192', '74', '10', '573', '376', '272', '79', '192'],
          backgroundColor: 'rgba(0, 155, 60, 0.6)', borderColor: 'rgba(0, 155, 60, 0.6)',
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

    this.cgChart = new Chart(this.categoriesChart.nativeElement, {
      type: 'line',
      data: {
        labels: ["2019", "2020", "2021", "2022", "2023", "2024", "2025"],
        datasets: [
          {
            label: "Total Leads", data: ['440', '76', '572', '379', '192', '45', '1178'],
            backgroundColor: 'rgb(254, 98, 131)', borderColor: 'rgb(254, 98, 131)',
            borderWidth: 1,
          },
          {
            label: "Connections", data: ['1120', '706', '72', '79', '812', '245', '118'],
            backgroundColor: 'rgb(72, 194, 194)', borderColor: 'rgb(72, 194, 194)',
            borderWidth: 1,
          },
          {
            label: "Articles", data: ['0', '276', '372', '1179', '192', '545', '178'],
            backgroundColor: 'rgb(252, 206, 86)', borderColor: 'rgb(252, 206, 86)',
            borderWidth: 1,
          },
          {
            label: "Categories", data: ['1120', '6', '672', '19', '512', '145', '908'],
            backgroundColor: 'rgb(157, 103, 255)', borderColor: 'rgb(157, 103, 255)',
            borderWidth: 1,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 5, transitions: { show: { animations: { x: { from: 0 }, y: { from: 0 } } }, hide: { animations: { x: { to: 0 }, y: { to: 0 } } } },
        scales: { x: { display: true, grid: { display: false } }, y: { display: true, ticks: { maxTicksLimit: 15 } } },
        plugins: { legend: { display: true, }, },
        elements: { point: { radius: 3 }, line: { tension: 0.1 } }
      }
    });

    this.vdChart = new Chart(this.visitDeviceChart.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ["Mobile", "Desktops", "Tablet", "Ios"],
        datasets: [{
          label: "Views", data: ['110', '276', '172', '79'],
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

  functionsdsdf() {
    this.stroksValue1 = (316.5 * 98) / 100;
    this.stroksValue2 = (316.5 * 40) / 100;
    this.stroksValue3 = (316.5 * 71) / 100;
    this.stroksValue4 = (316.5 * 83) / 100;
  };
}
