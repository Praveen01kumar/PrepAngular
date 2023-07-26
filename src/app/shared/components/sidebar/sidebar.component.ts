import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  selectedColor: any;
  selectedBg: any;
  menuFilter: any;
  memberFilter: any;
  infolistFilter: any;
  @Input() sideBarData: any;

  bookMemberArr: any[] = [
    { img: "assets/avatar/avatar1.jpg", name: "Chris Fox", message: "Designer, Blogger", status: false },
    { img: "assets/avatar/avatar2.jpg", name: "Joge Lucky", message: "Java Developer", status: true },
    { img: "assets/avatar/avatar3.jpg", name: "Isabella", message: "CEO, Thememakker", status: true },
    { img: "assets/avatar/avatar4.jpg", name: "Folisise Chosielie", message: "Art director, Movie Cut", status: false },
    { img: "assets/avatar/avatar5.jpg", name: "Alexander", message: "Writter, Mag Editor", status: true },
    { img: "assets/avatar/avatar1.jpg", name: "Chris Fox", message: "Designer, Blogger", status: false },
    { img: "assets/avatar/avatar2.jpg", name: "Joge Lucky", message: "Java Developer", status: true },
    { img: "assets/avatar/avatar3.jpg", name: "Isabella", message: "CEO, Thememakker", status: true },
    { img: "assets/avatar/avatar4.jpg", name: "Folisise Chosielie", message: "Art director, Movie Cut", status: false },
    { img: "assets/avatar/avatar5.jpg", name: "Alexander", message: "Writter, Mag Editor", status: true },
    { img: "assets/avatar/avatar1.jpg", name: "Chris Fox", message: "Designer, Blogger", status: false },
    { img: "assets/avatar/avatar2.jpg", name: "Joge Lucky", message: "Java Developer", status: true },
    { img: "assets/avatar/avatar3.jpg", name: "Isabella", message: "CEO, Thememakker", status: true },
    { img: "assets/avatar/avatar4.jpg", name: "Folisise Chosielie", message: "Art director, Movie Cut", status: false },
    { img: "assets/avatar/avatar5.jpg", name: "Alexander", message: "Writter, Mag Editor", status: true },
  ];
  colorRadio: any[] = [
    { bgcolor: "#a27ce6", color: "purple", value: 1, name: "Purple" },
    { bgcolor: "#3eacff", color: "blue", value: 2, name: "Blue" },
    { bgcolor: "#49c5b6", color: "cyan", value: 3, name: "Cyan" },
    { bgcolor: "#50d38a", color: "green", value: 4, name: "Green" },
    { bgcolor: "#ffce4b", color: "orange", value: 5, name: "Orange" },
    { bgcolor: "#e47297", color: "blush", value: 6, name: "Blush" },
  ];
  colorCheck: any[] = [
    { value: 1, name: "Report Panel Usag" },
    { value: 2, name: "Email Redirect" },
    { value: 3, name: "Notifications" },
    { value: 4, name: "Auto Updates" },
    { value: 5, name: "Purple" },
    { value: 6, name: "Location Permission" }
  ];
  infolistArr: any[] = [
    { head: "HOW-TO", infoArr: [{ name: "How to Create Campaign" }, { name: "Boost Your Sales" }, { name: "Website Analytics" }] },
    { head: "ACCOUNT", infoArr: [{ name: "Cearet New Account" }, { name: "Change Password?" }, { name: "Privacy & Policy" }] },
    { head: "BILLING", infoArr: [{ name: "Payment info" }, { name: "Auto-Renewal" }] }
  ];
  currentRoute: string = '';
  currentRoute1: any;
  constructor(public shared_sevice: SharedService, private router: Router, private authService: AuthService) { }
  logedIn: any = this.authService.isLogined();
  ngOnInit(): void {
    this.menuFilter = this.sideBarData;
    this.memberFilter = this.bookMemberArr;
    this.infolistFilter = this.infolistArr;
    this.openedPanel();

  }

  getValue(event: any) {
    this.selectedColor = event?.value?.color;
    this.selectedBg = event?.value?.bgcolor;
    this.shared_sevice.colorSetting$.next(this.selectedBg);
  }

  searchMenu(event: any) {
    this.sideBarData = this.menuFilter;
    this.sideBarData = this.sideBarData?.filter((i: any) => i?.title?.toLowerCase()?.indexOf((event?.target as HTMLInputElement)?.value?.toLocaleLowerCase()) !== -1);
  }

  searchMember(event: any) {
    this.bookMemberArr = this.memberFilter;
    this.bookMemberArr = this.bookMemberArr?.filter(i => ((i?.name) + (i?.message))?.toLowerCase()?.indexOf((event?.target as HTMLInputElement)?.value?.toLocaleLowerCase()) !== -1);
  }

  searchInfo(event: any) {
    this.infolistArr = this.infolistFilter;
    this.infolistArr = this.infolistArr?.filter(i => i?.head?.toLowerCase()?.indexOf((event?.target as HTMLInputElement)?.value?.toLocaleLowerCase()) !== -1);
  }

  goToPage(data: any) {
    this.router.navigate([`${data}`]);
    this.currentRoute1 = data;
  }

  logOutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
    this.logedIn = false;
  }
  openedPanel() {
    this.shared_sevice.currentUrl$.next(this.router?.url?.replace(/^\/|\/$/g, ""));
    this.currentRoute1 = this.currentRoute1 ? this.currentRoute1 : this.router?.url?.replace(/^\/|\/$/g, "");
    this.router.events.subscribe(evt => {
      if (evt instanceof NavigationEnd) {
        this.currentRoute = evt?.url?.replace(/^\/|\/$/g, "");
        this.currentRoute1 = this.currentRoute1 ? this.currentRoute1 : this.currentRoute;
        this.shared_sevice.currentUrl$.next(this.currentRoute);
      }
    });
  }
}
