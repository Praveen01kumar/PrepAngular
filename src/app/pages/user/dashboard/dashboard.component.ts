import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api-service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  topicsArr: any[] = [];

  constructor(private apiService: ApiService, public router: Router, public sharedService: SharedService) { }

  ngOnInit(): void { this.getData(); }

  getData() {
    this.sharedService.postData$.subscribe((res: any) => {
      if (res !== null) {
        this.getDataArr(res);
      } else {
        this.apiService.getTopics().subscribe((res: any) => {
          this.getDataArr(res);
          this.sharedService.postData$.next(res);
        });
      }
    });
  }

  getDataArr(res: any) {
    this.topicsArr = res?.topicsArr; 
  }

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
