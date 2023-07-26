import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
  folderArr: any[] = [
    { name: "Lucid Project", icon: "bi bi-folder" },
    { name: "Themeforest", icon: "bi bi-folder" },
    { name: "New Website", icon: "bi bi-folder" },
    { name: "My Folder", icon: "bi bi-folder" },
    { name: "Lucid Project", icon: "bi bi-folder" },
    { name: "Themeforest", icon: "bi bi-folder" },
    { name: "New Website", icon: "bi bi-folder" },
  ]

  @ViewChild('tValueChart', { static: true }) tValueChart!: ElementRef;
  tvChart!: Chart;

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.tvChart = new Chart(this.tValueChart.nativeElement, {
      type: 'line',
      data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023"],
        datasets: [{
          label: "Documents", data: [573, 376, 672, 719, 192, 234, 67],
          backgroundColor: 'rgba(0, 155, 60, 0.2)', borderColor: 'rgba(0, 155, 60, 0.6)', borderWidth: 2, fill: true, tension: 0.6, pointRadius: 1,
        },
        {
          label: "Media", data: [53, 376, 72, 219, 692, 134, 267],
          backgroundColor: 'rgba(149, 127, 2, 0.2)', borderColor: 'rgba(149, 127, 2, 0.6)', borderWidth: 2, fill: true, tension: 0.6, pointRadius: 1,
        },
        {
          label: "Images", data: [353, 76, 472, 29, 992, 234, 27],
          backgroundColor: 'rgba(149, 2, 93, 0.2)', borderColor: 'rgba(149, 2, 93, 0.6)', borderWidth: 2, fill: true, tension: 0.6, pointRadius: 1,
        },
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false, }, },
        transitions: { show: { animations: { x: { from: 0 }, y: { from: 0 } } }, hide: { animations: { x: { to: 0 }, y: { to: 0 } } } },
        scales: { x: { grid: { display: false } }, y: { grid: { display: true } } }
      },
    });
  }


}
