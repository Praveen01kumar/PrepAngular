import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import Chart from 'chart.js/auto';

@Component({
  selector: 'app-admain',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  @ViewChild('line1Chart', { static: true }) line1Chart!: ElementRef;
  lChart1!: Chart;
  @ViewChild('line2Chart', { static: true }) line2Chart!: ElementRef;
  lChart2!: Chart;
  @ViewChild('line3Chart', { static: true }) line3Chart!: ElementRef;
  lChart3!: Chart;
  @ViewChild('line4Chart', { static: true }) line4Chart!: ElementRef;
  lChart4!: Chart;
  @ViewChild('productChart', { static: true }) productChart!: ElementRef;
  prdChart!: Chart;
  @ViewChild('tValueChart', { static: true }) tValueChart!: ElementRef;
  tvChart!: Chart;
  @ViewChild('wValueChart', { static: true }) wValueChart!: ElementRef;
  wvChart!: Chart;
  @ViewChild('mValueChart', { static: true }) mValueChart!: ElementRef;
  mvChart!: Chart;
  @ViewChild('recordChart', { static: true }) recordChart!: ElementRef;
  rChart!: Chart;

  refrralArr: any[] = [
    { value: 2301, feedback: 'visits from Facebook', progress: { mode: 'determinate', color: 'accent', value: '40' } },
    { value: 2107, feedback: 'visits from Twitter', progress: { mode: 'determinate', color: 'primary', value: '80' } },
    { value: 2308, feedback: 'visits from Search', progress: { mode: 'determinate', color: 'accent', value: '60' } },
    { value: 1024, feedback: 'visits from Affiliates', progress: { mode: 'determinate', color: 'warn', value: '90' } },
    { value: 4107, feedback: 'visits from Instagram', progress: { mode: 'determinate', color: 'primary', value: '30' } },
  ];
  chatDataArr: any[] = [
    { sender: true, img: "assets/avatar/avatar3.jpg", message: "Hello, John What is the update on Project X?" },
    { sender: false, img: "assets/avatar/avatar4.jpg", message: "Hi, Alizee It is almost completed. I will send you an email later today." },
    { sender: true, img: "assets/avatar/avatar3.jpg", message: "That's great. Will catch you in evening." },
    { sender: false, img: "assets/avatar/avatar4.jpg", message: "Sure we'will have a blast today." },
    { sender: true, img: "assets/avatar/avatar3.jpg", message: "Thank, John!" },
    { sender: false, img: "assets/avatar/avatar4.jpg", message: "Welcome" },
    { sender: true, img: "assets/avatar/avatar3.jpg", message: "That's great. Will catch you in evening." },
    { sender: false, img: "assets/avatar/avatar4.jpg", message: "Sure we'will have a blast today." }
  ];
  recordTabaleArr: any[] = [
    { status: "success", name: "Twitter", records: 862, rate: 35, rateType: "pa" },
    { status: "info", name: "Facebook", records: 451, rate: 15, rateType: "pa" },
    { status: "warning", name: "Mailchimp", records: 502, rate: 20, rateType: "na" },
    { status: "danger", name: "Google", records: 502, rate: 20, rateType: "pa" },
    { status: "circle", name: "Other", records: 237, rate: 10, rateType: "na" },
    { status: "warning", name: "Mailchimp", records: 502, rate: 20, rateType: "na" },
    { status: "danger", name: "Google", records: 502, rate: 20, rateType: "pa" },
    { status: "circle", name: "Other", records: 237, rate: 10, rateType: "na" },
  ];
  lucidFeedArr: any[] = [
    { icon: "bi bi-hand-thumbs-up", title: "7 New Feedback", time: "Today", message: "It will give a smart finishing to your site", type: "title" },
    { icon: "bi bi-person", title: "New User", time: "10:45", message: "I feel great! Thanks team", type: "title" },
    { icon: "bi bi-question-circle", title: "Server Warning", time: "10:50", message: "Your connection is not private", type: "warning" },
    { icon: "bi bi-check2-circle", title: "Issue Fixed", time: "11:05", message: "WE have fix all Design bug with Responsive", type: "danger" },
    { icon: "bi bi-basket", title: "7 New Orders ", time: "11:35", message: "You received a new oder from Tina.", type: "title" }
  ];
  twitterMembArr: any[] = [
    { img: "assets/avatar/avatar1.jpg", name: "Chris Fox", message: "Designer, Blogger", status: false, time: "1 hours ago" },
    { img: "assets/avatar/avatar2.jpg", name: "Joge Lucky", message: "Java Developer", status: true, time: "2 hours ago" },
    { img: "assets/avatar/avatar3.jpg", name: "Isabella", message: "CEO, Thememakker", status: true, time: "3 hours ago" },
    { img: "assets/avatar/avatar4.jpg", name: "Folisise Chosielie", message: "Art director, Movie Cut", status: false, time: "4 hours ago" },
    { img: "assets/avatar/avatar5.jpg", name: "Alexander", message: "Writter, Mag Editor", status: true, time: "5 hours ago" },
    { img: "assets/avatar/avatar1.jpg", name: "Chris Fox", message: "Designer, Blogger", status: false, time: "6 hours ago" },
    { img: "assets/avatar/avatar2.jpg", name: "Joge Lucky", message: "Java Developer", status: true, time: "7 hours ago" },
    { img: "assets/avatar/avatar3.jpg", name: "Isabella", message: "CEO, Thememakker", status: true, time: "8 hours ago" },
    { img: "assets/avatar/avatar4.jpg", name: "Folisise Chosielie", message: "Art director, Movie Cut", status: false, time: "9 hours ago" },
    { img: "assets/avatar/avatar5.jpg", name: "Alexander", message: "Writter, Mag Editor", status: true, time: "10 hours ago" },
    { img: "assets/avatar/avatar1.jpg", name: "Chris Fox", message: "Designer, Blogger", status: false, time: "11 hours ago" },
    { img: "assets/avatar/avatar2.jpg", name: "Joge Lucky", message: "Java Developer", status: true, time: "12 hours ago", },
    { img: "assets/avatar/avatar3.jpg", name: "Isabella", message: "CEO, Thememakker", status: true, time: "1 Days ago" },
    { img: "assets/avatar/avatar4.jpg", name: "Folisise Chosielie", message: "Art director, Movie Cut", status: false, time: "2 Days ago" },
    { img: "assets/avatar/avatar5.jpg", name: "Alexander", message: "Writter, Mag Editor", status: true, time: "3 Days ago" },
  ];
  teamMsgArr: any[] = [
    { icon: "bi bi-envelope", message: "Inbox", badge: { type: "success", msg: "654", status: true } },
    { icon: "bi bi-eye-fill", message: "Profile visits", badge: { type: "info", msg: "364", status: true } },
    { icon: "bi bi-bookmark-check-fill", message: "Bookmarks", badge: { type: "warning", msg: "19", status: true } },
    { icon: "bi bi-telephone-fill", message: "Call", badge: { type: "warning", msg: "19", status: true } },
    { icon: "bi bi-chat-fill", message: "Messages", badge: { type: "danger", msg: "54", status: true } },
    { icon: "bi bi-telephone-inbound-fill", message: "Returned", badge: { type: "info", msg: "19", status: true } },
    { icon: "bi bi-telephone-plus-fill", message: "Recieved", badge: { type: "warning", msg: "19", status: true } },
    { icon: "bi bi-telephone-minus-fill", message: "Declined", badge: { type: "danger", msg: "100", status: true } },
  ];
  timelineArr: any[] = [
    {
      id: 213123, status: "green", time: "20-04-2018 - Today",
      tmsg: "Hello, 'Im a single div responsive timeline without media Queries!", user: "Elisse Joson", userStatus: "San Francisco,CA",
      discription: "I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best placeholder text, and I'm the biggest developer on the web card she has is the Lorem card.",
      timeline_img: []
    },
    {
      id: 3434534, status: "blue", time: "19-04-2018 - Yesterday",
      tmsg: "Oeehhh, that's awesome.. Me too!", user: "Katherine Lumaad", userStatus: "Oakland, CA",
      discription: "I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best placeholder text, and I'm the biggest developer on the web card she has is the Lorem card.",
      timeline_img: [{ img: "assets/blog-page-1.jpg" }, { img: "assets/blog-page-2.jpg" }]
    },
    {
      id: 566565, status: "warning", time: "21-02-2018",
      tmsg: "An Engineer Explains Why You Should Always Order the Larger Pizza", user: "Gary Camara", userStatus: "San Francisco, CA",
      discription: "I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best placeholder text, and I'm the biggest developer on the web card she has is the Lorem card.",
      timeline_img: [
        { img: "assets/blog-page-2.jpg" }, { img: "assets/blog-page-1.jpg" }, { img: "assets/blog-page-2.jpg" }, { img: "assets/blog-page-1.jpg" }, { img: "assets/blog-page-2.jpg" }, { img: "assets/blog-page-1.jpg" },
        { img: "assets/blog-page-2.jpg" }, { img: "assets/blog-page-1.jpg" }, { img: "assets/blog-page-2.jpg" }, { img: "assets/blog-page-1.jpg" }, { img: "assets/blog-page-2.jpg" }, { img: "assets/blog-page-1.jpg" }
      ]
    }
  ];

  msgBox: any;

  constructor() { }

  ngOnInit(): void {
    this.createChart();
    
  }

  createChart() {
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

    //chart 4
    this.lChart4 = new Chart(this.line4Chart.nativeElement, {
      type: 'line',
      data: {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [{
          label: "Likes", data: ['573', '376', '272', '79', '192', '74', '0'],
          backgroundColor: 'rgba(0, 155, 60, 0.6)', borderColor: 'rgba(0, 155, 60, 0.6)', fill: true, tension: 0.2,
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

    // product report chart
    this.prdChart = new Chart(this.productChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Mobile',
          data: ['100', '76', '32', '79', '892', '574', '473', '10', '769', '302', '9', '192'],
          backgroundColor: 'rgba(75, 192, 192, 0.6)', borderColor: 'rgba(75, 192, 192, 0.6)',
          stack: 'Stack 0',
        },
        {
          label: 'Laptop',
          data: ['0', '276', '37', '79', '92', '574', '173', '10', '276', '772', '79', '92'],
          backgroundColor: 'rgba(192, 75, 192, 0.6)', borderColor: 'rgba(192, 75, 192, 0.6)',
          stack: 'Stack 0',
        },
        {
          label: 'Computer',
          data: ['120', '76', '372', '879', '92', '74', '73', '510', '276', '372', '179', '92'],
          backgroundColor: 'rgba(247, 0, 28, 0.6)', borderColor: 'rgba(247, 0, 28, 0.6)',
          stack: 'Stack 0',
        },
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 5, transitions: { show: { animations: { x: { from: 0 }, y: { from: 0 } } }, hide: { animations: { x: { to: 0 }, y: { to: 0 } } } },
        scales: { x: { stacked: true, }, y: { stacked: true } },
        interaction: { intersect: false, },
      }
    });

    // total earning value chart
    this.tvChart = new Chart(this.tValueChart.nativeElement, {
      type: 'doughnut',
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

    // weekly earning value chart
    this.wvChart = new Chart(this.wValueChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [{
          label: "Earnings", data: ['573', '376', '272', '79'],
          backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(192, 75, 192, 0.6)', 'rgba(247, 0, 28, 0.6)', 'rgba(243, 219, 127, 0.6)'], borderColor: 'rgba(0, 155, 60, 0.6)',
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

    //record chart
    this.rChart = new Chart(this.recordChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
          label: "Records", data: ['-100', '176', '232', '-79', '892', '574', '-473', '210', '-769', '302', '-19', '192'],
          backgroundColor: [
            'rgba(247, 0, 28, 0.6)',
            'rgba(192, 75, 192, 0.6)',
            'rgba(247, 0, 28, 0.6)',
            'rgba(247, 0, 28, 0.6)',
            'rgba(0, 155, 60, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(247, 0, 28, 0.6)',
            'rgba(243, 219, 127, 0.6)',
            'rgba(247, 0, 28, 0.6)',
            'rgba(0, 155, 60, 0.6)',
            'rgba(247, 0, 28, 0.6)',
            'rgba(192, 75, 192, 0.6)'
          ], borderColor: [
            'rgba(247, 0, 28, 0.6)',
            'rgba(192, 75, 192, 0.6)',
            'rgba(247, 0, 28, 0.6)',
            'rgba(247, 0, 28, 0.6)',
            'rgba(0, 155, 60, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(247, 0, 28, 0.6)',
            'rgba(243, 219, 127, 0.6)',
            'rgba(247, 0, 28, 0.6)',
            'rgba(0, 155, 60, 0.6)',
            'rgba(247, 0, 28, 0.6)',
            'rgba(192, 75, 192, 0.6)'
          ],
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

  commentBtn(data: any) { this.msgBox = data; }







}
