import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, finalize, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api-service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.scss']
})
export class BloglistComponent implements OnInit {
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  isLoading: boolean = false;
  blogList: any[] = [];
  // blogList: any[] = [
  //   { img: "assets/post/blog_page_1.jpg", title: "All photographs are accurate", discrips: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal" },
  //   { img: "assets/post/blog_page_2.jpg", title: "All photographs are accurate", discrips: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal" },
  //   { img: "assets/post/blog_page_3.jpg", title: "All photographs are accurate", discrips: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal" },
  //   { img: "assets/post/blog_page_4.jpg", title: "All photographs are accurate", discrips: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal" },
  // ];
  ctgClouds: any[] = [{ name: "eCommerce" }, { name: "Microsoft Technologies" }, { name: "Creative UX" }, { name: "Wordpress" }, { name: "Angular JS" }, { name: "Website Design" }, { name: "HTML5" }, { name: "Infographics" }, { name: "Wordpress Development" },];
  popularPost: any[] = [{ title: "Apple Introduces Search Ads Basic", time: "jun 22, 2023", img: "assets/post/blog_page_3.jpg" }, { title: "new rules, more cars, more races", time: "jan 02, 2022", img: "assets/post/blog_page_4.jpg" },];
  instaPost: any[] = [{ img: "assets/post/blog_page_1.jpg" }, { img: "assets/post/blog_page_2.jpg" }, { img: "assets/post/blog_page_3.jpg" }, { img: "assets/post/blog_page_4.jpg" }, { img: "assets/post/blog_page_1.jpg" }, { img: "assets/post/blog_page_2.jpg" }, { img: "assets/post/blog_page_3.jpg" }, { img: "assets/post/blog_page_4.jpg" },];
  constructor(
    public apiService: ApiService,
    public shared_sevice: SharedService,
    private router: Router,
    ) { }
  ngOnInit(): void { this.allPost(); }

  allPost() {
    this.isLoading = true;
    this.apiService.getBlogPostList('').pipe(takeUntil(this._unsubscribeAll), finalize(() => { this.isLoading = false; })).subscribe((val: any) => {
      if (val?.status == 1) {
        this.blogList = val?.data;
      }
    }, (error) => {
      this.isLoading = false;
    });
  }

  continueRead(data:any){
    this.router.navigate(['/blog/blogdetail']);
    this.shared_sevice.postDetail_id$.next(data?.id);
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }


}
