import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  overview: boolean = true;
  settings: boolean = false;
  profileUrls:string='';
  contryArr: any[] = [
    { value: "", name: "-- Select Country --" },
    { value: "AF", name: "Afghanistan" },
    { value: "AX", name: "Åland Islands" },
    { value: "AL", name: "Albania" },
    { value: "DZ", name: "Algeria" },
    { value: "AS", name: "American Samoa" },
    { value: "AD", name: "Andorra" },
    { value: "AO", name: "Angola" },
    { value: "AI", name: "Anguilla" },
    { value: "AQ", name: "Antarctica" },
    { value: "AG", name: "Antigua and Barbuda" },
    { value: "AR", name: "Argentina" },
    { value: "AM", name: "Armenia" },
    { value: "AW", name: "Aruba" },
    { value: "AU", name: "Australia" },
    { value: "AT", name: "Austria" },
    { value: "AZ", name: "Azerbaijan" },
  ];
  languageArr: any[] = [
    { value: "", lang: "", name: "--Select Language--" },
    { value: "en_US", lang: "en", name: "English" },
    { value: "cs_CZ", lang: "bs", name: "Bosanski" },
    { value: "hi_IN", lang: "hi", name: "हिन्दी" },
    { value: "nl_NL", lang: "nl", name: "Nederlands" },
    { value: "oci", lang: "oc", name: "Occitan" }
  ];
  utcArr: any[] = [
    { label: "Africa", option: [{ value: "Africa/Abidjan", name: "Abidjan" }, { value: "Africa/Accra", name: "Accra" }] },
    { label: "America", option: [{ value: "America/Adak", name: "Adak" }, { value: "America/Anchorage", name: "Anchorage" }] },
    { label: "Antarctica", option: [{ value: "Antarctica/Casey", name: "Casey" }, { value: "Antarctica/Davis", name: "Davis" }] },
    { label: "Arctic", option: [{ value: "Arctic/Longyearbyen", name: "Longyearbyen" }] },
    { label: "Asia", option: [{ value: "Asia/Aden", name: "Aden" }, { value: "Asia/Almaty", name: "Almaty" }] },
    { label: "Atlantic", option: [{ value: "Atlantic/Azores", name: "Azores" }, { value: "Atlantic/Bermuda", name: "Bermuda" }] },
    { label: "Australia", option: [{ value: "Australia/Adelaide", name: "Adelaide" }, { value: "Australia/Brisbane", name: "Brisbane" }] },
    { label: "Europe", option: [{ value: "Europe/Amsterdam", name: "Amsterdam" }, { value: "Europe/Andorra", name: "Andorra" }] },
    { label: "Manual Offsets", option: [{ value: "UTC-12", name: "UTC-12" }, { value: "UTC-11", name: "UTC-11" }, { value: "UTC-10", name: "UTC-10" },] },
  ];

  constructor() { }

  ngOnInit(): void { }

  acTab(data: string) { data === 'overview' ? (this.overview = true, this.settings = false) : data === 'settings' ? (this.overview = false, this.settings = true) : undefined; }


  onSelectFile(event:any) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                reader.onload = (event:any) => {
                   this.profileUrls=event?.target?.result; 
                }

                reader.readAsDataURL(event.target.files[i]);
        }
    }
  }

}
