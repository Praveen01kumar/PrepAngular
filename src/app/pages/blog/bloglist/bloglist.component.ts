import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.scss']
})
export class BloglistComponent implements OnInit {

  blogList: any[] = [
    { img: "assets/post/blog_page_1.jpg", title: "All photographs are accurate", discrips: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal" },
    { img: "assets/post/blog_page_2.jpg", title: "All photographs are accurate", discrips: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal" },
    { img: "assets/post/blog_page_3.jpg", title: "All photographs are accurate", discrips: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal" },
    { img: "assets/post/blog_page_4.jpg", title: "All photographs are accurate", discrips: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal" },
  ];
  ctgClouds: any[] = [{ name: "eCommerce" }, { name: "Microsoft Technologies" }, { name: "Creative UX" }, { name: "Wordpress" }, { name: "Angular JS" }, { name: "Website Design" }, { name: "HTML5" }, { name: "Infographics" }, { name: "Wordpress Development" },];
  popularPost: any[] = [{ title: "Apple Introduces Search Ads Basic", time: "jun 22, 2023", img: "assets/post/blog_page_3.jpg" }, { title: "new rules, more cars, more races", time: "jan 02, 2022", img: "assets/post/blog_page_4.jpg" },];
  instaPost: any[] = [{ img: "assets/post/blog_page_1.jpg" }, { img: "assets/post/blog_page_2.jpg" }, { img: "assets/post/blog_page_3.jpg" }, { img: "assets/post/blog_page_4.jpg" }, { img: "assets/post/blog_page_1.jpg" }, { img: "assets/post/blog_page_2.jpg" }, { img: "assets/post/blog_page_3.jpg" }, { img: "assets/post/blog_page_4.jpg" },];
  constructor() { }
  ngOnInit(): void { }

}
