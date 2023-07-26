import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'ecommerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.scss']
})
export class ECommerceComponent implements OnInit {
  productsList: any[] = [
    { number: "109", title: "Products Sold", color: "primary", value: "40", icon: "bi bi-cart-plus" },
    { number: "235", title: "New Customers", color: "accent", value: "80", icon: "bi bi-person-plus" },
    { number: "2,318", title: "Net Profit", color: "primary", value: "45", icon: "bi bi-wallet" },
    { number: "68%", title: "Customer Satisfaction", color: "warn", value: "76", icon: "bi bi-heart" },
  ];
  transactionsArr: any[] = [
    { head: ["#", "Name", "Item", "Address", "Quantity", "Status", "Amount"], name: { name: "Hossein", img: "assets/avatar/avatar1.jpg" }, item:"IPONE-7", adress: "Porterfield 508 Virginia Street Chicago, IL 60653", quantity:"3", status: { badge: "bdg-success", name: "DONE" } ,amount:"$ 356"},
    { name: { name: "Camara", img: "assets/avatar/avatar2.jpg" }, item:"NOKIA-8", adress: "2595 Pearlman Avenue Sudbury, MA 01776", quantity:"3", status: { badge: "badges", name: "DELIVERED" } ,amount:"$ 542"},
    { name: { name: "Maryam", img: "assets/avatar/avatar3.jpg" }, item:"NOKIA-456", adress: "Porterfield 508 Virginia Street Chicago, IL 60653", quantity:"4", status: { badge: "bdg-success", name: "DONE" } ,amount:"$ 231"},
    { name: { name: "Micheal", img: "assets/avatar/avatar1.jpg" }, item:"SAMSANG PRO", adress: "508 Virginia Street Chicago, IL 60653", quantity:"1", status: { badge: "bdg-success", name: "DONE" } ,amount:"$ 601"},
    { name: { name: "Frank", img: "assets/avatar/avatar5.jpg" }, item:"NOKIA-456", adress: "1516 Holt Street West Palm Beach, FL 33401", quantity:"13", status: { badge: "bdg-warning", name: "PENDING" } ,amount:"$ 128"},
  ];
  customersArr: any[] = [
    {
      head: ["#", "Product", "Customers", "Total"],
      product: "IPONE-7", customer: [{ img: "assets/avatar/avatar1.jpg" }, { img: "assets/avatar/avatar2.jpg" }, { img: "assets/avatar/avatar3.jpg" }], price: "$83"
    },
    { product: "NOKIA-8", customer: [{ img: "assets/avatar/avatar4.jpg" }, { img: "assets/avatar/avatar5.jpg" }, { img: "assets/avatar/avatar1.jpg" }], price: "$66" },
    { product: "NOKIA-456", customer: [{ img: "assets/avatar/avatar5.jpg" }, { img: "assets/avatar/avatar4.jpg" }, { img: "assets/avatar/avatar3.jpg" }], price: "$93" },
    { product: "SAMSANG PRO", customer: [{ img: "assets/avatar/avatar2.jpg" }], price: "$178", total: "$17,700" },
    { product: "NOKIA-456", customer: [{ img: "assets/avatar/avatar3.jpg" }, { img: "assets/avatar/avatar4.jpg" }, { img: "assets/avatar/avatar5.jpg" }], price: "$83" },
    { product: "NOKIA-310", customer: [{ img: "assets/avatar/avatar5.jpg" }, { img: "assets/avatar/avatar2.jpg" }, { img: "assets/avatar/avatar4.jpg" }, { img: "assets/avatar/avatar1.jpg" }], price: "$75" },
  ];
  @ViewChild('genderChart', { static: true }) genderChart!: ElementRef;
  gnChart!: Chart;
  @ViewChild('tValueChart', { static: true }) tValueChart!: ElementRef;
  tvChart!: Chart;
  @ViewChild('mValueChart', { static: true }) mValueChart!: ElementRef;
  mvChart!: Chart;

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }
  createChart() {

    this.gnChart = new Chart(this.genderChart.nativeElement, {
      type: 'line',
      data: {
        labels: ["2019", "2020", "2021", "2022", "2023", "2024", "2025"],
        datasets: [
          {
            label: "Sales", data: ['0', '1076', '372', '79', '192', '545', '78'],
            backgroundColor: 'rgb(245 101 130 / 60%)', borderColor: 'rgb(245, 101, 130)',
            borderWidth: 0.5, fill: true, tension: 0.5,
          },
          {
            label: "Revenue", data: ['120', '6', '72', '709', '112', '45', '1178'],
            backgroundColor: 'rgb(2 181 178 / 60%)', borderColor: 'rgb(2, 181, 178)',
            borderWidth: 1, fill: true, tension: 0.5,
          },
          {
            label: "Profit", data: ['20', '76', '672', '709', '12', '945', '178'],
            backgroundColor: 'rgb(68 87 113 / 60%)', borderColor: 'rgb(68, 87, 113)',
            borderWidth: 1, fill: true, tension: 0.5,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 5, transitions: { show: { animations: { x: { from: 0 }, y: { from: 0 } } }, hide: { animations: { x: { to: 0 }, y: { to: 0 } } } },
        scales: { x: { display: true, grid: { display: false } }, y: { display: true, grid: { display: false }, ticks: { maxTicksLimit: 10 }, min: 0, max: 1500 } },
        plugins: { legend: { display: false, }, },
        elements: { point: { radius: 2 }, line: { tension: 0.1 } },
        animations: { tension: { duration: 1000, easing: 'linear', from: 0.5, to: 0.2, loop: true } }
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
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: "Earnings", data: ['100', '76', '32', '79', '892', '574', '473', '10', '769', '302', '9', '192'],
          backgroundColor: 'rgba(75, 192, 192, 0.6)', borderColor: 'rgba(0, 155, 60, 0.6)', borderWidth: 0.1, fill: true, tension: 0.2, pointRadius: 2, pointBackgroundColor: 'rgba(247, 0, 28, 0.6)'

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
