import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api-service';

@Component({
  selector: 'app-blgctgry',
  templateUrl: './blgctgry.component.html',
  styleUrls: ['./blgctgry.component.scss']
})
export class BlgctgryComponent implements OnInit {

  catagArr: any[] = [];
  catagFilter: any;

  constructor(
    private apiService: ApiService, 
    private route: ActivatedRoute,
    public router: Router,

    ) { }
  ngOnInit(): void { 
    this.getData(); 
  }

  getData() {
    this.apiService.getTopics().subscribe((res: any) => {
      const postCt = this.route?.snapshot?.params['category']?.replace(/_/g, " ");
      const data = res?.topicsArr?.find((el: any) => el?.title === postCt);
      this.catagArr = data?.left.concat(data?.right);
      this.catagFilter = this.catagArr;
    });
  }

  gotoPost(id:string){
    const postCt = this.route?.snapshot?.params['category'];
    const topic = id?.replace(/ /g, "_");
    this.router.navigate([`post/${postCt}/${topic}`]);
  }

  searchCatg(event: any) {
    this.catagArr = this.catagFilter;
    this.catagArr = this.catagArr?.filter(i => (i?.name)?.toLowerCase()?.indexOf((event?.target as HTMLInputElement)?.value?.toLocaleLowerCase()) !== -1);
  }

}
