import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import Chart from 'chart.js/auto';
import { ApiService } from 'src/app/shared/services/api-service';

@Component({
  selector: 'app-home',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  scrPrtg: number = 0;

  sidebarTog: boolean = true;
  @ViewChild('visitorsChart', { static: true }) visitorsChart!: ElementRef;
  visitorChart!: Chart;
  @ViewChild('visitsChart', { static: true }) visitsChart!: ElementRef;
  visitChart!: Chart;
  constructor(public SharedService: SharedService,public apiService:ApiService) { }

  sideBarArr: any[] = [];
  ngOnInit(): void {
    this.createChart();
    this.getYourData();
    this.SharedService.getScrollPercentage().subscribe((per: number) => { this.scrPrtg = per; });
  }

  createChart() {
    //Visitors chart 
    this.visitorChart = new Chart(this.visitorsChart.nativeElement, {
      type: 'line',
      data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
        datasets: [{
          label: "Visitors", data: ['573', '376', '800', '272', '479'],
          backgroundColor: 'rgba(75, 192, 192, 0.6)', borderColor: 'rgba(75, 192, 192, 0.6)',
          borderWidth: 1, pointRadius: 2, pointBackgroundColor: 'rgba(247, 0, 28, 0.6)', pointBorderColor: 'rgba(247, 0, 28, 0.6)'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        transitions: { show: { animations: { x: { from: 0 }, y: { from: 0 } } }, hide: { animations: { x: { to: 0 }, y: { to: 0 } } } },
        scales: { x: { display: false }, y: { display: false }, },
        plugins: { legend: { display: false, }, tooltip: { callbacks: { title: function () { return '' } } } },

      }
    });

    //visits chart
    this.visitChart = new Chart(this.visitsChart.nativeElement, {
      type: 'line',
      data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
        datasets: [{
          label: "Visits", data: ['73', '376', '272', '479', '12'],
          backgroundColor: 'rgba(247, 0, 28, 0.6)', borderColor: 'rgba(247, 0, 28, 0.6)',
          borderWidth: 1, pointRadius: 2, pointBackgroundColor: 'rgba(75, 192, 192, 0.6)', pointBorderColor: 'rgba(75, 192, 192, 0.6)'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        transitions: { show: { animations: { x: { from: 0 }, y: { from: 0 } } }, hide: { animations: { x: { to: 0 }, y: { to: 0 } } } },
        scales: { x: { display: false }, y: { display: false }, },
        plugins: { legend: { display: false, }, tooltip: { callbacks: { title: function () { return '' } } } },

      }
    });
  }

  getYourData() {
    this.apiService.getSideBar().subscribe((res: any) => {
      this.sideBarArr = res?.userSideBar;
      this.SharedService.sideBar$.next(this.sideBarArr);
    }, (error) => { });
  }

}
