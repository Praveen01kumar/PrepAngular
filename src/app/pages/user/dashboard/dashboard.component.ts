import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  topicsArr: any[] = [];

  constructor(private apiService: ApiService, public router: Router) { }

  ngOnInit(): void { this.getData(); }
  getData() { this.apiService.getTopics().subscribe((data: any) => { this.topicsArr = data?.topicsArr; }); }
  getTopic(data: { topic: string, sub: { name: string } }) {
    const topic = data?.topic?.replace(/ /g, "_");
    const sub = data?.sub?.name?.replace(/ /g, "_");
    this.router.navigate([`post/${topic}/${sub}`]);
  }

  getCategory(data: { topic: string }) {
    const topic = data?.topic?.replace(/ /g, "_");
    this.router.navigate([`post/${topic}`]);
  }


}
