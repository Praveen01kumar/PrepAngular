import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'realestate',
  templateUrl: './realestate.component.html',
  styleUrls: ['./realestate.component.scss']
})
export class RealestateComponent implements OnInit {
  @ViewChild('realestateChart', { static: true }) realestateChart!: ElementRef;
  prdChart!: Chart;
  @ViewChild('line1blogChart', { static: true }) line1blogChart!: ElementRef;
  lbChart1!: Chart;
  @ViewChild('line2blogChart', { static: true }) line2blogChart!: ElementRef;
  lbChart2!: Chart;
  @ViewChild('line3blogChart', { static: true }) line3blogChart!: ElementRef;
  lbChart3!: Chart;

  relscardList: any[] = [
    { number: "128", title: "New Project", color: "primary", value: "40" },
    { number: "758", title: "Total Project", color: "accent", value: "80" },
    { number: "2521", title: "Properties for Rent", color: "primary", value: "45" },
    { number: "$ 24,500", title: "Total Earnings(Years)", color: "warn", value: "76" },
  ];
  properList: any[] = [
    { icon: "bi bi-building", title: "Properties", number: "128", color: "#17a2b8" },
    { icon: "bi bi-graph-up", title: "Total Project", number: "758", color: "#f3ad06" },
    { icon: "bi bi-cart3", title: "Properties for Rent", number: "2521", color: "#de4848" },
    { icon: "bi bi-tag", title: "Total Earnings(Years)", number: "$ 24,500", color: "#444" },
  ];
  propertyArr: any[] = [
    { head: ["BHK", "Properties Type", "Adress", "Status", "Area (Sq.Ft.)", "Price"], bhk: "1 BHK", priority: "Apartment", adress: "70 Bowman St. South Windsor, CT 06074", status: "Ready To Move", area: "839", price: "$ 398" },
    { bhk: "1 BHK", priority: "Apartment", adress: "123 6th St. Melbourne, FL 32904", status: "Under Construction", area: "	1870 & 1994", price: "	$ 425" },
    { bhk: "5 BHK", priority: "Apartment", adress: "123 6th St. Melbourne, FL 32904", status: "Under Construction", area: "839", price: "$ 1,800" },
    { bhk: "Villa", priority: "Villa", adress: "4 Shirley Ave. West Chicago, IL 60185", status: "	Ready To Move", area: "	2400", price: "$ 2,500" },
    { bhk: "1 BHK", priority: "Apartment", adress: "70 Bowman St. South Windsor, CT 06074", status: "Under Construction", area: "839", price: "$ 421" },
    { bhk: "1.5 BHK", priority: "Apartment", adress: "4 Shirley Ave. West Chicago, IL 60185", status: "New Launch", area: "1826 & 1948", price: "$ 780" },
  ];
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
        {
          label: 'Teacher',
          data: ['120', '76', '372', '579', '92', '74', '73'],
          backgroundColor: 'rgba(247, 0, 28, 0.6)', borderColor: 'rgba(247, 0, 28, 0.6)',
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
  }
}
