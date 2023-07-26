import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.scss']
})
export class HospitalComponent implements OnInit {

  stroksValue1: any;
  stroksValue2: any;
  stroksValue3: any;
  @ViewChild('genderChart', { static: true }) genderChart!: ElementRef;
  gnChart!: Chart;
  @ViewChild('line1blogChart', { static: true }) line1blogChart!: ElementRef;
  lbChart1!: Chart;
  @ViewChild('line2blogChart', { static: true }) line2blogChart!: ElementRef;
  lbChart2!: Chart;
  @ViewChild('line3blogChart', { static: true }) line3blogChart!: ElementRef;
  lbChart3!: Chart;
  @ViewChild('browserChart', { static: true }) browserChart!: ElementRef;
  brChart!: Chart;
  patientsArr: any[] = [
    { head: ["#", "Patients", "Adress", "START Date", "END Date", "Priority", "Progress", "Status",], img: "assets/avatar/avatar1.jpg", name: "John", adress: "70 Bowman St. South Windsor, CT 06074", start_date: "Sept 13, 2017", end_date: "Sept 16, 2017", priority: { badge: "", name: "medium" }, progress: { value: "48", color: "primary" }, status: { badge: "success", name: "ADMIT" } },
    { img: "assets/avatar/avatar2.jpg", name: "Jack Bird", adress: "123 6th St. Melbourne, FL 32904", start_date: "Sept 24, 2017", end_date: "Sept 22, 2017", priority: { badge: "danger", name: "HIGH" }, progress: { value: "34", color: "warn" }, status: { badge: "", name: "DISCHARGE" } },
    { img: "assets/avatar/avatar3.jpg", name: "Dean Otto", adress: "123 6th St. Melbourne, FL 32904", start_date: "Sept 12, 2017", end_date: "Sept 23, 2017", priority: { badge: "", name: "medium" }, progress: { value: "56", color: "primary" }, status: { badge: "success", name: "ADMIT" } },
    { img: "assets/avatar/avatar4.jpg", name: "Jack Bird", adress: "4 Shirley Ave. West Chicago, IL 60185", start_date: "Sept 16, 2017", end_date: "Sept 16, 2017", priority: { badge: "success", name: "LOW" }, progress: { value: "89", color: "accent" }, status: { badge: "", name: "DISCHARGE" } },
    { img: "assets/avatar/avatar5.jpg", name: "Hughe L.", adress: "70 Bowman St. South Windsor, CT 06074", start_date: "Sept 18, 2017", end_date: "Sept 18, 2017", priority: { badge: "danger", name: "HIGH" }, progress: { value: "12", color: "primary" }, status: { badge: "success", name: "ADMIT" } },
    { img: "assets/avatar/avatar1.jpg", name: "Dean Otto", adress: "4 Shirley Ave. West Chicago, IL 60185", start_date: "Sept 14, 2017", end_date: "Sept 18, 2017", priority: { badge: "success", name: "LOW" }, progress: { value: "89", color: "accent" }, status: { badge: "", name: "DISCHARGE" } },
    { img: "assets/avatar/avatar2.jpg", name: "Jack Bird", adress: "70 Bowman St. South Windsor, CT 06074", start_date: "Sept 12, 2017", end_date: "Sept 16, 2017", priority: { badge: "", name: "medium" }, progress: { value: "23", color: "warn" }, status: { badge: "", name: "DISCHARGE" } },
  ];
  bReposrArr: any[] = [{ name: "Crome", value: "35" }, { name: "Safari", value: "25" }, { name: "Mozila", value: "25" }, { name: "Opera", value: "3" }, { name: "IE", value: "7" }, { name: "Others", value: "5" }];
  visitorMArr: any[] = [{ name: "visitor from America", progress: { value: "90", color: "primary" } }, { name: "visitor from Canada", progress: { value: "30", color: "accent" } }, { name: "visitor from UK", progress: { value: "80", color: "warn" } }, { name: "visitor from India", progress: { value: "40", color: "warn" } }, { name: "visitor from Australia", progress: { value: "60", color: "primary" } }, { name: "visitor from Other", progress: { value: "20", color: "accent" } }];
  constructor() { }

  ngOnInit(): void {
    this.createChart();
    this.functionsdsdf();
  }

  createChart() {

    this.gnChart = new Chart(this.genderChart.nativeElement, {
      type: 'line',
      data: {
        labels: ["2019", "2020", "2021", "2022", "2023", "2024", "2025"],
        datasets: [
          {
            label: "America", data: ['0', '1076', '372', '79', '192', '545', '78'],
            backgroundColor: 'rgb(245 101 130 / 60%)', borderColor: 'rgb(245, 101, 130)',
            borderWidth: 0.5, fill: true, tension: 0.5,
          },
          {
            label: "India", data: ['120', '6', '72', '709', '112', '45', '1178'],
            backgroundColor: 'rgb(2 181 178 / 60%)', borderColor: 'rgb(2, 181, 178)',
            borderWidth: 1, fill: true, tension: 0.5,
          },
          {
            label: "Australia", data: ['20', '76', '672', '709', '12', '945', '178'],
            backgroundColor: 'rgb(68 87 113 / 60%)', borderColor: 'rgb(68, 87, 113)',
            borderWidth: 1, fill: true, tension: 0.5,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 5, transitions: { show: { animations: { x: { from: 0 }, y: { from: 0 } } }, hide: { animations: { x: { to: 0 }, y: { to: 0 } } } },
        scales: { x: { display: true, grid: { display: false } }, y: { display: true, ticks: { maxTicksLimit: 10 }, min: 0, max: 1500 } },
        plugins: { legend: { display: true, }, },
        elements: { point: { radius: 2 }, line: { tension: 0.1 } },
        animations: { tension: { duration: 1000, easing: 'linear', from: 0.5, to: 0.2, loop: true } }
      }
    });

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

  functionsdsdf() {
    this.stroksValue1 = (316.5 * 98) / 100;
    this.stroksValue2 = (316.5 * 40) / 100;
    this.stroksValue3 = (316.5 * 71) / 100;
  };

}
