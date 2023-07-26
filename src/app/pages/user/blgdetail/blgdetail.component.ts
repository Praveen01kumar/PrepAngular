import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api-service';

@Component({
  selector: 'app-blgdetail',
  templateUrl: './blgdetail.component.html',
  styleUrls: ['./blgdetail.component.scss']
})
export class BlgdetailComponent implements OnInit {

  postDetail: any;
  constructor(private apiService: ApiService, private route: ActivatedRoute,) { }
  ngOnInit(): void { this.getData(); }

  getData() {
    this.apiService.getTopics().subscribe((res: any) => {
      const postId = this.route?.snapshot?.params['id']?.replace(/_/g, " ");
      const postCt = this.route?.snapshot?.params['category']?.replace(/_/g, " ");
      const data = res?.topicsArr?.find((el: any) => el?.title === postCt);
      this.postDetail = data?.left.concat(data?.right)?.find((el: any) => el?.name === postId);
      // show detail view 
      const postContainer = document.getElementById('discription') as HTMLElement;
      const titleElement = document.createElement('h2');
      titleElement.textContent = this.postDetail?.name;
      const descriptionElement = document.createElement('div');
      descriptionElement.innerHTML = this.postDetail?.discription;
      postContainer.appendChild(titleElement);
      postContainer.appendChild(descriptionElement);

    });
  }

}
