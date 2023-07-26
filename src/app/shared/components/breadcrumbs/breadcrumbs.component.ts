import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})

export class BreadcrumbsComponent implements OnInit {

  breadcrumbsData: string[] = [];
  constructor(public shared_sevice: SharedService, private router: Router) { }

  ngOnInit() {
    this.bradCrumArr();
  }

  bradCrumArr() {
    this.breadcrumbsData = this.router?.url?.replace(/^\/|\/$/g, "")?.split("/")?.filter((e: string) => e != '');
    this.shared_sevice.currentUrl$.subscribe((url: any) => { this.breadcrumbsData = url.split("/").filter((e: string) => e != '');});
  }

  goTo(index: number) {
    this.breadcrumbsData.splice(index + 1);
    this.router.navigate([`${this.breadcrumbsData.join("/")}`]);
  }

 goToPage(data: any) { this.router.navigate([`${data}`]) };

}


