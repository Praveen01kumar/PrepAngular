import { Component, OnInit } from '@angular/core';
import { Subscription, finalize } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { ApiService } from '../../services/api-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../services/shared.service';
import { mustMatch } from '../../services/mustmatch';
import { passStrenValidator, spaceNotAllowed } from '../../services/validistor';
import { msg } from '../../services/error-messages';
import { MatDialog } from '@angular/material/dialog';
import { SotialLinkComponent } from '../sotial-link/sotial-link.component';

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
  cha_passw_Form!: FormGroup;
  userData: any;
  sub: boolean = false;
  ermsg: any = msg;
  constructor(
    public authService: AuthService,
    public apiService: ApiService,
    private fb: FormBuilder,
    public sharedService: SharedService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.callOninIt();
  }

  callOninIt() {
    this.getCountry();
    this.getTimeZone();
    this.basicForm();
    this.changePassw();
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
  get f() { return this.cha_passw_Form.controls; }

  submitForm() {
    this.sub = true;
    if (this.basicInfoForm.invalid) {
      return;
    }
    const payload = {
      id: this.user_id,
      first_name: this.basicInfoForm?.value?.first_name,
      last_name: this.basicInfoForm?.value?.last_name,
      gender: this.basicInfoForm?.value?.gender,
      birth_date: this.basicInfoForm?.value?.birth_date,
      site_url: this.basicInfoForm?.value?.site_url,
      address: this.basicInfoForm?.value?.address,
      city: this.basicInfoForm?.value?.city,
      state: this.basicInfoForm?.value?.state,
      country: this.basicInfoForm?.value?.country
    }
    this.updateBasic(payload);

  }

  patchInfoForm(value: any) {
    this.basicInfoForm.patchValue({
      first_name: value?.first_name,
      last_name: value?.last_name,
      gender: value?.gender,
      birth_date: this.dateFormat(value?.birth_date),
      site_url: value?.site_url,
      address: value?.address,
      city: value?.city,
      state: value?.state,
      country: value?.country,
    });
  }

  updateBasic(data: any) {
    this.isLoading = true;
    this.apiService.updateBasicInfo(data).pipe(finalize(() => { this.isLoading = false; })).subscribe((val: any) => {
      if (val?.status == 1) {
        this.sharedService.snake({ message: 'Your Basic Information Updated!' });
        this.getuserDetail();
      }
    }, (error) => {
      this.isLoading = false;
    });
  }

  changePassw() {
    this.cha_passw_Form = this.fb.group(
      {
        new_password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16), spaceNotAllowed, passStrenValidator]],
        cf_password: ['', [Validators.required]],
      },
      { validator: mustMatch('new_password', 'cf_password') });
  }

  updatePass(data: any) {
    this.isLoading = true;
    this.apiService.updatePassswoard(data).pipe(finalize(() => { this.isLoading = false; })).subscribe((val: any) => {
      if (val?.status == 1) {
        this.getuserDetail();
        this.sharedService.snake({ message: val?.message });
      }
    }, (error) => {
      this.sharedService.snake({ message: error?.error?.message });
      this.isLoading = false;
    });
  }

  changesPass() {
    this.sub = true;
    if (this.cha_passw_Form.invalid) {
      return;
    }
    const payload = {
      id: this.user_id,
      new_password: this.cha_passw_Form?.value?.new_password
    }
    this.updatePass(payload);
    this.cha_passw_Form?.reset();
    this.sub = false;
  }

  addSotialLink(){
    
    const dialogData:{}={}
    const dialogRef = this.dialog.open(SotialLinkComponent, { width: '36vw', data:dialogData, });
    dialogRef.disableClose = true;
    dialogRef.afterClosed().subscribe(result => { 
      console.log(result);
      
    });
  }

  
}
