import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moredash',
  templateUrl: './moredash.component.html',
  styleUrls: ['./moredash.component.scss']
})
export class MoredashComponent implements OnInit {

  catagArr: { name: string | any, url: string | any }[] = [
    { name: 'About us', url: 'about' },
    { name: 'AIS Tools', url: 'ais' }
  ];
  catagFilter: any[] = [];
  constructor(public router: Router) { }
  ngOnInit(): void { this.catagFilter = this.catagArr; }
  gotoPost(url: string) { this.router.navigate([`more/${url}`]); }

  searchCatg(event: any) {
    this.catagArr = this.catagFilter;
    this.catagArr = this.catagArr?.filter(i => (i?.name)?.toLowerCase()?.indexOf((event?.target as HTMLInputElement)?.value?.toLocaleLowerCase()) !== -1);
  }


}