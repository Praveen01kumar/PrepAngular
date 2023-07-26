import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  imageFilter: any;
  imageList: any[] = [
    { img: "assets/images/images1.jpg", imgname: "sdfsdfs.jpg", imgsize: "Size:2MB", imgdate: "Nov 02, 2019" },
    { img: "assets/images/images2.jpg", imgname: "sdfsdfs.jpg", imgsize: "Size:2MB", imgdate: "Nov 02, 2017" },
    { img: "assets/images/images3.jpg", imgname: "sdfsdf.jpg", imgsize: "Size:6MB", imgdate: "Nov 02, 2018" },
    { img: "assets/images/images4.jpg", imgname: "sdfsdfs.jpg", imgsize: "Size:5MB", imgdate: "Nov 02, 2016" },
    { img: "assets/images/images5.jpg", imgname: "sdfsdf.jpg", imgsize: "Size:2MB", imgdate: "Nov 02, 2017" },
    { img: "assets/images/images6.jpg", imgname: "jkjlkj.jpg", imgsize: "Size:9MB", imgdate: "Nov 02, 2013" },
    { img: "assets/images/images7.jpg", imgname: "rwerwer.jpg", imgsize: "Size:2MB", imgdate: "Nov 02, 2017" },
    { img: "assets/images/images8.jpg", imgname: "bvcbcvb.jpg", imgsize: "Size:2MB", imgdate: "Nov 02, 2019" },
    { img: "assets/images/images9.jpg", imgname: "sdfsdf.jpg", imgsize: "Size:3MB", imgdate: "Nov 02, 2020" },
    { img: "assets/images/images10.jpg", imgname: "uiyuiyu.jpg", imgsize: "Size:2MB", imgdate: "Nov 02, 2019" },
    { img: "assets/images/images11.jpg", imgname: "aswsa.jpg", imgsize: "Size:2MB", imgdate: "Nov 02, 2017" },
    { img: "assets/images/images1.jpg", imgname: "fdsf.jpg", imgsize: "Size:6MB", imgdate: "Nov 02, 2018" },
    { img: "assets/images/images2.jpg", imgname: "bnmbnm.jpg", imgsize: "Size:5MB", imgdate: "Nov 02, 2016" },
    { img: "assets/images/images3.jpg", imgname: "jkljk.jpg", imgsize: "Size:2MB", imgdate: "Nov 02, 2017" },
    { img: "assets/images/images4.jpg", imgname: "wewer.jpg", imgsize: "Size:9MB", imgdate: "Nov 02, 2013" },
    { img: "assets/images/images5.jpg", imgname: "ffbcv.jpg", imgsize: "Size:2MB", imgdate: "Nov 02, 2017" },
    { img: "assets/images/images6.jpg", imgname: "vbnvbn.jpg", imgsize: "Size:2MB", imgdate: "Nov 02, 2019" },
    { img: "assets/images/images7.jpg", imgname: "yuytu.jpg", imgsize: "Size:4MB", imgdate: "Nov 02, 2020" },
  ]
  constructor() { }

  ngOnInit(): void {
    this.imageFilter = this.imageList;
  }

  searchImage(event: any) {
    this.imageList = this.imageFilter;
    this.imageList = this.imageList?.filter(i => (i?.imgname)?.toLowerCase()?.indexOf((event?.target as HTMLInputElement)?.value?.toLocaleLowerCase()) !== -1);
  }

}
