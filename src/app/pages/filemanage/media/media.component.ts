import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  mediaFilter: any;
  mediaList: any[] = [
    { medicon: "bi bi-card-image", medcolor:"#f3ad06", medname: "hellonew.mkv", medsize: "Size: 462MB", meddate: "Nov 02, 2019" },
    { medicon: "bi bi-file-earmark-play", medcolor:"#00800080", medname: "Jee Le Zara Song.mpg4", medsize: "Size: 02MB", meddate: "Nov 02, 2017" },
    { medicon: "bi bi-card-image", medcolor:"#00800080", medname: "hellonew.mkv", medsize: "Size: 56MB", meddate: "Nov 02, 2018" },
    { medicon: "bi bi-file-earmark-play", medcolor:"#f3ad06", medname: "Jee Le Zara Song.mpg4", medsize: "Size: 45MB", meddate: "Nov 02, 2016" },
    { medicon: "bi bi-card-image", medcolor:"#00800080", medname: "hellonew.mkv", medsize: "Size: 12MB", meddate: "Nov 02, 2017" },
    { medicon: "bi bi-file-earmark-play", medcolor:"#ff000080", medname: "Jee Le Zara Song.mpg4", medsize: "Size: 89MB", meddate: "Nov 02, 2013" },
    { medicon: "bi bi-card-image", medcolor:"#0000ff80", medname: "hellonew.mkv", medsize: "Size: 42MB", meddate: "Nov 02, 2017" },
    { medicon: "bi bi-file-earmark-play", medcolor:"#00800080", medname: "Jee Le Zara Song.mpg4", medsize: "Size: 02MB", meddate: "Nov 02, 2019" },
    { medicon: "bi bi-card-image", medcolor:"#00800080", medname: "hellonew.mkv", medsize: "Size: 40MB", meddate: "Nov 02, 2020" },
    { medicon: "bi bi-file-earmark-play", medcolor:"#f3ad06", medname: "Jee Le Zara Song.mpg4", medsize: "Size: 462MB", meddate: "Nov 02, 2019" },
    { medicon: "bi bi-card-image", medcolor:"#00800080", medname: "hellonew.mkv", medsize: "Size: 02MB", meddate: "Nov 02, 2017" },
    { medicon: "bi bi-file-earmark-play", medcolor:"#00800080", medname: "Jee Le Zara Song.mpg4", medsize: "Size: 56MB", meddate: "Nov 02, 2018" },
    { medicon: "bi bi-card-image", medcolor:"#f3ad06", medname: "hellonew.mkv", medsize: "Size: 45MB", meddate: "Nov 02, 2016" },
    { medicon: "bi bi-file-earmark-play", medcolor:"#00800080", medname: "Jee Le Zara Song.mpg4", medsize: "Size: 12MB", meddate: "Nov 02, 2017" },
    { medicon: "bi bi-card-image", medcolor:"#ff000080", medname: "hellonew.mkv", medsize: "Size: 89MB", meddate: "Nov 02, 2013" },
    { medicon: "bi bi-file-earmark-play", medcolor:"#0000ff80", medname: "Jee Le Zara Song.mpg4", medsize: "Size: 42MB", meddate: "Nov 02, 2017" },
    { medicon: "bi bi-card-image", medcolor:"#00800080", medname: "hellonew.mkv", medsize: "Size: 02MB", meddate: "Nov 02, 2019" },
    { medicon: "bi bi-file-earmark-play", medcolor:"#00800080", medname: "Jee Le Zara Song.mpg4", medsize: "Size: 40MB", meddate: "Nov 02, 2020" },
  ]
  constructor() { }

  ngOnInit(): void {
    this.mediaFilter = this.mediaList;
  }

  searchMedia(event: any) {
    this.mediaList = this.mediaFilter;
    this.mediaList = this.mediaList?.filter(i => (i?.medname)?.toLowerCase()?.indexOf((event?.target as HTMLInputElement)?.value?.toLocaleLowerCase()) !== -1);
  }

}
