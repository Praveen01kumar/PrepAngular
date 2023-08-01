import { Component, OnInit } from '@angular/core';
import { Subject, Subscription, finalize, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api-service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.scss']
})
export class BlogdetailComponent implements OnInit {
  isLoading: boolean = false;
  blogData: any;
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  ctgClouds: any[] = [{ name: "eCommerce" }, { name: "Microsoft Technologies" }, { name: "Creative UX" }, { name: "Wordpress" }, { name: "Angular JS" }, { name: "Website Design" }, { name: "HTML5" }, { name: "Infographics" }, { name: "Wordpress Development" },];
  popularPost: any[] = [{ title: "Apple Introduces Search Ads Basic", time: "jun 22, 2023", img: "assets/post/blog_page_3.jpg" }, { title: "new rules, more cars, more races", time: "jan 02, 2022", img: "assets/post/blog_page_4.jpg" },];
  instaPost: any[] = [{ img: "assets/post/blog_page_1.jpg" }, { img: "assets/post/blog_page_2.jpg" }, { img: "assets/post/blog_page_3.jpg" }, { img: "assets/post/blog_page_4.jpg" }, { img: "assets/post/blog_page_1.jpg" }, { img: "assets/post/blog_page_2.jpg" }, { img: "assets/post/blog_page_3.jpg" }, { img: "assets/post/blog_page_4.jpg" },];
  commentsList: any[] = [
    { img: "assets/avatar/avatar1.jpg", name: "Gigi Hadid", msg: "Why are there so many tutorials on how to decouple WordPress? how fast and easy it is to get it running (and keep it running!) and its massive ecosystem.", time: "Mar 09 2023" },
    { img: "assets/avatar/avatar2.jpg", name: "Christian Louboutin", msg: "Great tutorial but few issues with it? If i try open post i get following errors. Please can you help me?", time: "Mar 12 2023" },
    { img: "assets/avatar/avatar3.jpg", name: "Kendall Jenner", msg: "Very nice and informative article. In all the years I've done small and side-projects as a freelancer, I've ran into a few problems here and there.", time: "Mar 20 2023" },
    { img: "assets/avatar/avatar4.jpg", name: "Praveen kumar", msg: "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", time: "Mar 25 2023" },
    { img: "assets/avatar/avatar5.jpg", name: "Rahul Kumar", msg: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", time: "Mar 31 2023" },
  ];
  blog_id: any;
  subscriptions: Subscription[] = [];
  constructor(
    public shared_sevice: SharedService,
    public apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.callOnInit();
  }

  callOnInit() {
    this.getPost();

  }

  getPost() {
    const postDetail_id = this.shared_sevice.postDetail_id$.subscribe((id: any) => { this.blog_id = id; });
    this.subscriptions.push(postDetail_id);
    if (this.blog_id != null) {
      this.isLoading = true;
      this.apiService.getBlogPostByid({ id: this.blog_id }).pipe(takeUntil(this._unsubscribeAll), finalize(() => { this.isLoading = false; })).subscribe((val: any) => {
        if (val?.status == 1) {
          this.blogData = val?.data[0];
        }
      }, (error) => {
        this.isLoading = false;
      });
    } else {
      this.isLoading = true;
      this.apiService.getBlogPostList('').pipe(takeUntil(this._unsubscribeAll), finalize(() => { this.isLoading = false; })).subscribe((val: any) => {
        if (val?.status == 1) {
          this.blogData = val?.data[0];
        }
      }, (error) => {
        this.isLoading = false;
      });
    }

  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
