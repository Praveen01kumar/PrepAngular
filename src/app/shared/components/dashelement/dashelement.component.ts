import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dashelement',
  templateUrl: './dashelement.component.html',
  styleUrls: ['./dashelement.component.scss']
})
export class DashelementComponent implements OnInit {
  @Input() catagArr: any[] = [];
  @Input() base: string = '';
  catagFilter: any[] = [];
  constructor(public router: Router) { }
  ngOnInit(): void { this.catagFilter = this.catagArr; }
  gotoPost(url: string) { this.router.navigate([`${this.base}/${url}`]); }

  searchCatg(event: any) {
    this.catagArr = this.catagFilter;
    this.catagArr = this.catagArr?.filter(i => (i?.name)?.toLowerCase()?.indexOf((event?.target as HTMLInputElement)?.value?.toLocaleLowerCase()) !== -1);
  }

}
