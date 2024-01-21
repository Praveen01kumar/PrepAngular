import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  coloading: boolean = false;
  blogData: any;
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  ctgClouds: any[] = [];
  popularPost: any[] = [{ title: "Apple Introduces Search Ads Basic", time: "jun 22, 2023", img: "assets/post/blog_page_3.jpg" }, { title: "new rules, more cars, more races", time: "jan 02, 2022", img: "assets/post/blog_page_4.jpg" },];
  instaPost: any[] = [{ img: "assets/post/blog_page_1.jpg" }, { img: "assets/post/blog_page_2.jpg" }, { img: "assets/post/blog_page_3.jpg" }, { img: "assets/post/blog_page_4.jpg" }, { img: "assets/post/blog_page_1.jpg" }, { img: "assets/post/blog_page_2.jpg" }, { img: "assets/post/blog_page_3.jpg" }, { img: "assets/post/blog_page_4.jpg" },];
  commentsList: any[] = [];
  blog_id: any;
  subscriptions: Subscription[] = [];
  commnetCtr = new FormControl();
  constructor(
    public shared_sevice: SharedService,
    public apiService: ApiService,
    private activeroute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.callOnInit();
  }

  callOnInit() {
    this.getPost();
  }

  getPost() {
    const postDetail_id = this.shared_sevice.postDetail_id$.subscribe((id: any) => {
      if (id === null) {
        const routeSubscription = this.activeroute.paramMap.subscribe(params => { this.blog_id = params.get('id'); });
        this.subscriptions.push(routeSubscription);
      } else { this.blog_id = id; }
    });
    this.subscriptions.push(postDetail_id);
    if (this.blog_id != null) {
      this.isLoading = true;
      this.apiService.getBlogPostByid(this.blog_id).pipe(takeUntil(this._unsubscribeAll), finalize(() => { this.isLoading = false; })).subscribe((val: any) => {
        if (val?.status) {
          this.blogData = val?.data;
          this.getCategory();
        }
      }, (error) => {
        this.isLoading = false;
      });
    } else {
      this.isLoading = true;
      this.apiService.getBlogPostList().pipe(takeUntil(this._unsubscribeAll), finalize(() => { this.isLoading = false; })).subscribe((val: any) => {
        if (val?.status) {
          this.blogData = val?.data[0];
          this.getCategory();
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

  getCategory() {
    this.apiService.getAllCategory().subscribe((cate: any) => {
      if (cate?.status) {
        const category = JSON.parse(this.blogData?.category);
        this.ctgClouds = cate?.category?.filter((item: any) => category.includes(item?.id?.toString()));
        this.commentsList = this.blogData?.comments;
      }
    }, (error) => { });
  }

  leaveComment() {
    this.coloading = true;
    const payload = {
      content: this.commnetCtr?.value,
      postId: this.blogData.id
    };
    this.apiService.leavePostComment(payload).pipe(takeUntil(this._unsubscribeAll), finalize(() => { this.coloading = false; })).subscribe((val: any) => {
      if (val?.status) {
        this.shared_sevice.snake({ message: val?.message });
        this.commnetCtr.setValue(null);
        this.getAllComments();
      }
    }, (error) => {
      this.coloading = false;
      this.shared_sevice.snake({ message: error?.error?.message });
    });
  }


  getAllComments() {
    this.coloading = true;
    const payload = {
      postId: this.blogData.id
    };
    this.apiService.getCommnetsList(payload).pipe(takeUntil(this._unsubscribeAll), finalize(() => { this.coloading = false; })).subscribe((val: any) => {
      if (val?.status) {
        this.commentsList = val?.data;
      }
    }, (error) => {
      this.coloading = false;
      this.shared_sevice.snake({ message: error?.error?.message });
    });
  }

}
