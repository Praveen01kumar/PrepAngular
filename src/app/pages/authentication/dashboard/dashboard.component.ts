import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  catagArr: any[] = [
    { name: 'Lock Screen', url: 'lockscreen' },
    { name: 'Login', url: 'login' },
    { name: 'Register', url: 'register' },
    { name: 'Forgot Password', url: 'fpassword' },
    { name: 'Page 404', url: 'p404' },
    { name: 'Page 403', url: 'p403' },
    { name: 'Page 500', url: 'p500' },
    { name: 'Page 503', url: 'p503' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
