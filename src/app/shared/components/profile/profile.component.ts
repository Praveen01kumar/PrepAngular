import { Component, OnInit } from '@angular/core';
import { Subscription, finalize } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { ApiService } from '../../services/api-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  basicInfoForm!: FormGroup;
  userData: any;
  sub: boolean = false;
  constructor(
    public authService: AuthService,
    public apiService: ApiService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.callOninIt();
  }


  callOninIt() {
    this.basicForm();
    this.getUserToken();
    this.getuserDetail();
  }

  getuserDetail() {
    if (this.user_id) {
      this.isLoading = true;
      this.apiService.getUserById({ id: this.user_id }).pipe(finalize(() => { this.isLoading = false; })).subscribe((val: any) => {
        if (val?.status == 1) {
          this.userData = val?.data[0];
          this.patchInfoForm(this.userData);
          this.getCountry();
          this.getTimeZone();
        }
      }, (error) => {
        this.isLoading = false;
      });
    }
  }

  acTab(data: string) { data === 'overview' ? (this.overview = true, this.settings = false) : data === 'settings' ? (this.overview = false, this.settings = true) : undefined; }

  getUserToken() {
    const getToken: any = localStorage.getItem('token');
    if (getToken !== null) {
      const token = this.authService.decrypt(getToken);
      const decodedPayload = JSON.parse(atob(token.split('.')[1]));
      this.user_id = decodedPayload?.id
    }
  }

  onSelectFile(event: any) {
    const file = event?.target?.files;
    if (file && file[0]) {
      const filesAmount = file?.length;
      for (let i = 0; i < filesAmount; i++) {
        this.updateProfile(file);
        const reader = new FileReader();
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

  updateProfile(data: any) {
    this.isLoading = true;
    const formData = new FormData();
    formData.append('profile', data[0]);
    formData.append('id', this.user_id);
    this.apiService.updateProfile(formData).pipe(finalize(() => { this.isLoading = false; })).subscribe((val: any) => {
      if (val?.status == 1) {
      }
    }, (error) => {
      this.isLoading = false;
    });
  }

  basicForm() {
    this.basicInfoForm = this.fb.group(
      {
        first_name: [''],
        last_name: [''],
        gender: [''],
        birth_date: [''],
        site_url: [''],
        address: [''],
        city: [''],
        state: [''],
        country: [''],
      });
  }

  get bif() { return this.basicInfoForm.controls; }

  submitForm() {
    this.sub = true;
    if (this.basicInfoForm.invalid) {
      return;
    }

    console.log('this.basicInfoForm.value:', this.basicInfoForm.value);

  }

  patchInfoForm(value: any) {
    this.basicInfoForm.patchValue({
      first_name: value?.first_name,
      last_name: value?.last_name,
      gender: value?.gender,
      birth_date: this.dateFormat(value?.created_at),
      site_url: value?.site_url,
      address: value?.address,
      city: value?.city,
      state: value?.state,
      country: value?.country,
    });
  }

}
