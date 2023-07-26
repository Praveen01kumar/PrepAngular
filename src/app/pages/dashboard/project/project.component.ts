import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projcardList: any[] = [
    { number: "128", title: "New Project", color: "primary", value: "40" },
    { number: "758", title: "Total Project", color: "accent", value: "80" },
    { number: "2521", title: "Properties for Rent", color: "primary", value: "45" },
    { number: "$ 24,500", title: "Total Earnings(Years)", color: "warn", value: "76" },
  ];
  mailList: any[] = [
    { icon: "bi bi-eye", name: "Inbox", badge: { name: "654", type: "bdg-success" } },
    { icon: "bi bi-envelope", name: "Profile visits", badge: { name: "364", type: "bdg-warning" } },
    { icon: "bi bi-telephone", name: "Call", badge: { name: "12", type: "bdg-warning" } },
    { icon: "bi bi-chat", name: "Messages", badge: { name: "54", type: "bdg-danger" } },
    { icon: "bi bi-bookmark", name: "Bookmarks", badge: { name: "19", type: "bdg-warning" } },
    { icon: "bi bi-bell", name: "Notifications", badge: { name: "56", type: "bdg-danger" } },
    { icon: "bi bi-stopwatch", name: "Watch", badge: { name: "25", type: "bdg-warning" } },
  ];
  teamList: any[] = [
    { img: "assets/avatar/avatar1.jpg", desig: "Team Leader", name: "Maryam Amiri" },
    { img: "assets/avatar/avatar2.jpg", desig: "Angular Champ", name: "Fidel Tonn" },
    { img: "assets/avatar/avatar3.jpg", desig: "UI UX Desiger", name: "Tim Hank" },
    { img: "assets/avatar/avatar4.jpg", desig: "Sales Lead", name: "Gary Camara" },
    { img: "assets/avatar/avatar2.jpg", desig: "Angular Champ", name: "Fidel Tonn" },
    { img: "assets/avatar/avatar3.jpg", desig: "UI UX Desiger", name: "Tim Hank" },
  ];
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep', 'Code Stuff', 'Drop Stuff', 'Run', 'Walk'];
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog', 'Walk Dog','Stretch','Drag Stuff'];
  patientsArr: any[] = [
    {
      head: ["Application", "Team", "Sales", "Price", "Total"],
      app: { appn: "Alpino 4.1", appd: "WrapTheme To By Again" }, team: [{ img: "assets/avatar/avatar1.jpg" }, { img: "assets/avatar/avatar2.jpg" }, { img: "assets/avatar/avatar3.jpg" }], sales: "11,200", price: "$83", total: "$22,520"},
    { app: { appn: "Compass 2.0", appd: "WrapTheme To By Again" }, team: [{ img: "assets/avatar/avatar4.jpg" }, { img: "assets/avatar/avatar5.jpg" }, { img: "assets/avatar/avatar1.jpg" }], sales: "11,200", price: "$66", total: "$13,205" },
    { app: { appn: "Nexa 1.1", appd: "WrapTheme To By Again" }, team: [{ img: "assets/avatar/avatar5.jpg" }, { img: "assets/avatar/avatar4.jpg" }, { img: "assets/avatar/avatar3.jpg" }], sales: "12,080", price: "$93", total: "$17,700" },
    { app: { appn: "Oreo 2.2", appd: "WrapTheme To By Again" }, team: [{ img: "assets/avatar/avatar2.jpg" }], sales: "11,200", price: "$178", total: "$17,700" },
    { app: { appn: "Apple 4.1", appd: "WrapTheme To By Again" }, team: [{ img: "assets/avatar/avatar3.jpg" }, { img: "assets/avatar/avatar4.jpg" }, { img: "assets/avatar/avatar5.jpg" }], sales: "18,200", price: "$83", total: "$21,520" },
    { app: { appn: "Appolo 2.1", appd: "WrapTheme To By Again" }, team: [{ img: "assets/avatar/avatar5.jpg" },{ img: "assets/avatar/avatar2.jpg" }, { img: "assets/avatar/avatar4.jpg" }, { img: "assets/avatar/avatar1.jpg" }], sales: "11,200", price: "$75", total: "$02,520" },
  ];
  @ViewChild('projectsChart', { static: true }) projectsChart!: ElementRef;
  prdChart!: Chart;
  @ViewChild('tValueChart', { static: true }) tValueChart!: ElementRef;
  tvChart!: Chart;
  @ViewChild('mValueChart', { static: true }) mValueChart!: ElementRef;
  mvChart!: Chart;
  constructor() { }

  ngOnInit(): void {
    this.createChart()
  }
  createChart() {
    this.prdChart = new Chart(this.projectsChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [{
          label: 'Income',
          data: ['100', '76', '32', '79', '892', '574', '473'],
          backgroundColor: 'rgba(75, 192, 192, 0.6)', borderColor: 'rgba(75, 192, 192, 0.6)', tension: 0.2, borderWidth: 1,
        },
        {
          label: 'Courses',
          data: ['10', '276', '37', '79', '92', '574', '173'],
          backgroundColor: 'rgba(192, 75, 192, 0.6)', borderColor: 'rgba(192, 75, 192, 0.6)', tension: 0.2, borderWidth: 1,
        },
        {
          label: 'Teacher',
          data: ['120', '76', '372', '579', '92', '74', '73'],
          backgroundColor: 'rgba(247, 0, 28, 0.6)', borderColor: 'rgba(247, 0, 28, 0.6)', tension: 0.2, borderWidth: 1,
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
    // total earning value chart
    this.tvChart = new Chart(this.tValueChart.nativeElement, {
      type: 'pie',
      data: {
        labels: ["1999", "2020", "2021", "2022", "2023"],
        datasets: [{
          label: "Revenue", data: [573, 376, 672, 719, 192],
          backgroundColor: ['rgba(0, 155, 60, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(192, 75, 192, 0.6)', 'rgba(247, 0, 28, 0.6)', 'rgba(243, 219, 127, 0.6)'], borderColor: 'rgba(0, 155, 60, 0.6)', borderWidth: 0,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        transitions: { show: { animations: { x: { from: 0 }, y: { from: 0 } } }, hide: { animations: { x: { to: 0 }, y: { to: 0 } } } }
      }
    });

    // monthly earning value chart 
    this.mvChart = new Chart(this.mValueChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: "Earnings", data: ['100', '76', '32', '79', '892', '574', '473', '10', '769', '302', '9', '192'],
          backgroundColor: [
            'rgba(75, 192, 192, 0.6)',
            'rgba(192, 75, 192, 0.6)',
            'rgba(247, 0, 28, 0.6)',
            'rgba(243, 219, 127, 0.6)',
            'rgba(0, 155, 60, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(192, 75, 192, 0.6)',
            'rgba(247, 0, 28, 0.6)',
            'rgba(243, 219, 127, 0.6)',
            'rgba(0, 155, 60, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(192, 75, 192, 0.6)'
          ], borderColor: 'rgba(0, 155, 60, 0.6)',
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
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
