import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { AuthService } from '../../auth/auth.service';
import { ApiService } from '../../services/api-service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

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
  user_id: any = 1;
  userData: any;
  @Input() sideBarData: any;
  private _unsubscribeAll: Subject<any> = new Subject<any>();
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
  constructor(
    public shared_sevice: SharedService,
    private router: Router,
    private authService: AuthService,
    public apiService: ApiService,
  ) { }
  logedIn: any = this.authService.isLogined();
  ngOnInit(): void {
    this.shared_sevice.sideBar$.subscribe((res) => { this.menuFilter = res; }, (err) => { console.log(err); });
    this.shared_sevice.userDetail$.subscribe((res) => { if (res) this.getuserDetail(); }, (err) => { console.log(err); });
    this.menuFilter = this.sideBarData;
    this.memberFilter = this.bookMemberArr;
    this.infolistFilter = this.infolistArr;
    this.openedPanel();
    this.getuserDetail();
  }

  getuserDetail() {
    // const getToken: any = localStorage.getItem('token');
    // if (getToken !== null) {
    //   const token = this.authService.decrypt(getToken);
    //   const decodedPayload = JSON.parse(atob(token.split('.')[1]));
    //   this.user_id = decodedPayload?.id
    // }
    // if (this.user_id) {
    //   this.apiService.getUserById({ id: this.user_id }).subscribe((val: any) => {
    //     if (val?.status == 1) {
    //       this.userData = val?.data[0];
    //     }
    //   }, (error) => {
    //     console.log(error);
    //   });
    // }

    const getUser: any = localStorage.getItem('user');
    if (getUser !== null) { this.userData = JSON.parse(this.authService.decrypt(getUser)); }
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
    const payload = {
      email: this.userData?.email,
    }
    this.apiService.logout(payload).pipe(takeUntil(this._unsubscribeAll)).subscribe({
      next: (val: any) => {
        
        if (val?.status) {
          this.shared_sevice.snake({ message: val?.message });
          // localStorage.removeItem('token');
          // localStorage.removeItem('user');
          this.router.navigate(['/']);
          this.logedIn = false;
        }
      },
      error: (error) => {
        // console.log(error);  
        if (error && error.error && error.error.message) {
          this.shared_sevice.snake({ message: error.error.message});
        } else {
          console.error('Unexpected error:', error);
          // Handle other error scenarios as needed
        }
      }
    });
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

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

}
