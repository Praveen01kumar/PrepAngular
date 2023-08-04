import { Component, OnInit } from '@angular/core';
import { Subscription, finalize } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { ApiService } from '../../services/api-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  overview: boolean = false;
  settings: boolean = true;
  profileUrls: string = '';
  contryArr: any[] = [];
  languageArr: any[] = [
    { value: "en_US", lang: "en", name: "English" },
    { value: "cs_CZ", lang: "bs", name: "Bosanski" },
    { value: "hi_IN", lang: "hi", name: "हिन्दी" },
    { value: "nl_NL", lang: "nl", name: "Nederlands" },
    { value: "oci", lang: "oc", name: "Occitan" }
  ];
  timezoneArr: any[] = [];
  subscription: Subscription[] = [];
  user_id: any = 1;
  isLoading: boolean = false;
  userData: any;
  constructor(
    public authService: AuthService,
    public apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.callOninIt();
  }


  callOninIt() {
    this.getuserDetail();
  }

  getuserDetail() {
    const getToken: any = localStorage.getItem('token');
    if (getToken !== null) {
      const token = this.authService.decrypt(getToken);
      const decodedPayload = JSON.parse(atob(token.split('.')[1]));
      this.user_id = decodedPayload?.id
    }
    if (this.user_id) {
      this.isLoading = true;
      this.apiService.getUserById({ id: this.user_id }).pipe(finalize(() => { this.isLoading = false; })).subscribe((val: any) => {
        if (val?.status == 1) {
          this.userData = val?.data[0];
          this.getCountry();
          this.getTimeZone();
        }
      }, (error) => {
        this.isLoading = false;
      });
    }
  }

  acTab(data: string) { data === 'overview' ? (this.overview = true, this.settings = false) : data === 'settings' ? (this.overview = false, this.settings = true) : undefined; }


  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.profileUrls = event?.target?.result;
        }

        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  getCountry() {
    this.isLoading = true;
    this.apiService.getCountry().pipe(finalize(() => { this.isLoading = false; })).subscribe((val: any) => {
      this.contryArr = val.counsrtyList;
    }, (error) => {
      this.isLoading = false;
    });
  }

  getTimeZone() {
    this.isLoading = true;
    this.apiService.getTimeZone().pipe(finalize(() => { this.isLoading = false; })).subscribe((val: any) => {
      this.timezoneArr = val?.timezoneList;
    }, (error) => {
      this.isLoading = false;
    });
  }

  dateFormat(date: any) {
    const dateObject = new Date(date);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0");
    const day = String(dateObject.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }

  ngOnDestroy(): void {
    this.subscription.forEach(s => { s.unsubscribe(); });
  }

}
