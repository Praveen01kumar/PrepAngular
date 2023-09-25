import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sotial-link',
  templateUrl: './sotial-link.component.html',
  styleUrls: ['./sotial-link.component.scss']
})
export class SotialLinkComponent implements OnInit {
  userSocialForm!: FormGroup;
  submit: boolean = false;
  addsocialLinkArr: any[] = [];
  socialUpdateIcon: any;
  socialUpdateName: any;
  socialArr: any[] = [
    { id: 342, name: "Instagram", icon: "instagram" },
    { id: 343, name: "Youtube", icon: "youtube" },
    { id: 344, name: "FaceBook", icon: "facebook" },
    { id: 345, name: "Twitter", icon: "twitter" },
    { id: 346, name: "Website", icon: "website" },
    { id: 347, name: "Linkedin", icon: "linkdin" }
  ];
  constructor(
    public dialogref: MatDialogRef<SotialLinkComponent>,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.contactBasicInfoFormVal();
  }

  closemodel() {
    this.dialogref.close();
  }

  contactBasicInfoFormVal() {
    this.userSocialForm = this.formBuilder.group({
      social: ['', Validators.required]
    });
  }

  addFormValue() {
    this.submit = true;
    if (this.userSocialForm.invalid) {
      return;
    }
    const social: {} = this.socialArr.find(val => val.id == this.userSocialForm.value.social);
    this.addsocialLinkArr.push({ ...social, url: '' });
    this.submit = false;
    this.userSocialForm.reset();
  }

  get socialValid(): { [key: string]: AbstractControl } {
    return this.userSocialForm.controls;
  }

  updateIconSelect(event: any) {
    this.socialUpdateIcon = this.socialArr.find(val => val?.id == event?.value)?.icon;
    this.socialUpdateName = this.socialArr.find(val => val?.id == event?.value)?.name;
  }

  changesocialurl(event: any, i: number) {
    this.addsocialLinkArr[i]['url'] = event?.target?.value;
  }

  removeItem(i: number) {
    this.addsocialLinkArr.splice(i, 1);
  }

}
