import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.scss']
})
export class UniversityComponent implements OnInit {
  @ViewChild('productChart', { static: true }) productChart!: ElementRef;
  prdChart!: Chart;
  @ViewChild('line1Chart', { static: true }) line1Chart!: ElementRef;
  lChart1!: Chart;
  @ViewChild('line2Chart', { static: true }) line2Chart!: ElementRef;
  lChart2!: Chart;
  @ViewChild('line3Chart', { static: true }) line3Chart!: ElementRef;
  lChart3!: Chart;
  @ViewChild('line4Chart', { static: true }) line4Chart!: ElementRef;
  lChart4!: Chart;

  // myObject = { 'a': 1, 'b': 2, 'c': 3 }
  asfasf = 23;
  constructor() { }
  uCardArr: any[] = [
    { icon1: "bi bi-person", icon1color: "#3C89DA", text1: "Total Student", num1: "530", icon2: "bi bi-person-circle", icon2color: "#f3ad06", text2: "Total Teacher", num2: "14" },
    { icon1: "bi bi-tags", icon1color: "#3C89DA", text1: "Department", num1: "7", icon2: "bi bi-bookmark-check", icon2color: "##444", text2: "Courses", num2: "35" },
    { icon1: "bi bi-credit-card", icon1color: "#de4848", text1: "Expense", num1: "$3205", icon2: "bi bi-wallet2", icon2color: "#22af46", text2: "Income", num2: "$35,325" },
    { icon1: "bi bi-geo", icon1color: "#444", text1: "Our Center", num1: "28", icon2: "bi bi-emoji-smile", icon2color: "#22af46", text2: "Happy Clients", num2: "528" },
  ];
  patientsArr: any[] = [
    {
      head: ["ID", "Name", "Age", "Address", "Number", "Department",],
      id: "OU 00456", name: "John", age: "23", adress: "70 Bowman St. South Windsor, CT 06074", number: "8743342335", department: { badge: "success", name: "MCA" }
    },
    { id: "KU 00789", name: "Jack Bird", age: "22", adress: "123 6th St. Melbourne, FL 32904", number: "9789789788", department: { badge: "warning", name: "MEDICAL" } },
    { id: "KU 00987", name: "Dean Otto", age: "56", adress: "123 6th St. Melbourne, FL 32904", number: "7865656717", department: { badge: "success", name: "M.COM" } },
    { id: "OU 00951", name: "Jack Bird", age: "34", adress: "4 Shirley Ave. West Chicago, IL 60185", number: "8768676677", department: { badge: "success", name: "MBA" } },
    { id: "OU 00456", name: "Hughe L.", age: "45", adress: "70 Bowman St. South Windsor, CT 06074", number: "9786566678", department: { badge: "danger", name: "MCA" } },
    { id: "OU 00953", name: "Dean Otto", age: "20", adress: "4 Shirley Ave. West Chicago, IL 60185", number: "9876543345", department: { badge: "danger", name: "BBA" } },
  ];
  // userList: any[] = [
  //   { id: "sfsdDFDF2343@#@4", name: "praveen kumar", age: "23", status: "conform", },
  //   { id: "sfsdDFDF44563@#@4", name: "arjun kumar", age: "26", status: "waiting", wl: 13 },
  //   { id: "sfsdDFfdgfd3@#@4", name: "shubham kumar", age: "34", status: "waiting", wl: 14 },
  //   { id: "sfsdDFvbcvb3@#@4", name: "nabulla", age: "53", status: "waiting", wl: 15 },
  //   { id: "sfsdDioi2343@#@4", name: "rahul", age: "67", status: "waiting", wl: 16 },
  // ];
  stList: any[] = [
    { name: "praveen kumar", percentage: { badge: "success", name: "23" } },
    { name: "arjun kumar", percentage: { badge: "warning", name: "45" } },
    { name: "shubham kumar", percentage: { badge: "danger", name: "65" } },
    { name: "nabulla", percentage: { badge: "danger", name: "23" } },
    { name: "rahul", percentage: { badge: "warning", name: "76" } },
    { name: "praveen ", percentage: { badge: "success", name: "23" } },
    { name: "arjun ", percentage: { badge: "warning", name: "45" } },
    { name: "shubham ", percentage: { badge: "danger", name: "65" } },
    { name: "nabulla", percentage: { badge: "danger", name: "23" } },
    { name: "rahul", percentage: { badge: "warning", name: "76" } },
  ]
  ngOnInit(): void {
    this.createChart();
  }
  createChart() {
    this.prdChart = new Chart(this.productChart.nativeElement, {
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
        scales: { x: { display: true, grid: { display: true } }, y: { display: true, grid: { display: false } } },
        interaction: { intersect: false, },
      }
    });
    //chaert 1
    this.lChart1 = new Chart(this.line1Chart.nativeElement, {
      type: 'pie',
      data: {
        labels: ["Science", "Commerce", "Atrs"],
        datasets: [{
          label: "Earnings", data: ['574', '374', '173'],
          backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgb(192, 140, 75, 0.6)', 'rgb(192, 75, 75, 0.6)'], borderColor: ['rgba(75, 192, 192, 0.6)', 'rgb(192, 140, 75, 0.6)', 'rgb(192, 75, 75, 0.6)'],
          borderWidth: 0.4,
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
        labels: ["Overall", "2016", "2017"],
        datasets: [{
          label: "Science", data: ['990', '576', '372'],
          backgroundColor: 'rgba(243, 219, 127, 0.6)', borderColor: 'rgba(243, 219, 127, 0.6)', fill: true, tension: 0.2,
          borderWidth: 1, pointRadius: 4,
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
      type: 'bar',
      data: {
        labels: ["Overall", "2016", "2016.5", "2017", "2017.5"],
        datasets: [{
          label: "Commerce", data: ['100', '276', '372', '879', '592'],
          backgroundColor: 'rgba(159, 0, 127, 0.6)', borderColor: 'rgba(159, 0, 127, 0.6)',
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
  }
  // cencelTicket(data: any) {
  //   if (this.userList[this.userList.findIndex((x: any) => x.id === data?.id)].status === 'conform') {
  //     this.userList[this.userList.findIndex((x: any) => x.id === data?.id) + 1].status = 'conform';
  //     this.userList = this.userList.filter((el: any) => el.id !== data?.id);
  //     for (let i = 0; this.userList.length; i++) {
  //       this.userList[this.userList.findIndex((x: any) => x?.id === data?.id) + 1].wl = 0;
  //       this.userList[i].wl--;
  //     }
  //   } else {
  //     this.userList = this.userList.filter((el: any) => el.id !== data?.id);
  //     for (let i = 0; this.userList.length; i++) {
  //       this.userList[i].wl--;
  //     }
  //   }
  // }

}
