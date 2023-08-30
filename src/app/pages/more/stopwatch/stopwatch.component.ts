import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {
  @ViewChild("stopwatch") stopwatch: ElementRef | any | undefined;
  hr: any = 0;
  min: any = 0;
  sec: any = 0;
  mils: any = 0;
  stoptime: boolean = true;
  constructor() { }
  ngOnInit(): void { }

  start() {
    if (this.stoptime == true) {
      this.stoptime = false;
      this.Repeat();
    }
  }

  stop() {
    if (this.stoptime == false) {
      this.stoptime = true;
    }
  }

  Repeat() {
    if (this.stoptime == false) {
      this.sec = parseInt(this.sec);
      this.min = parseInt(this.min);
      this.hr = parseInt(this.hr);
      this.mils = parseInt(this.mils);
      this.mils = this.mils + 1;
      if (this.mils == 100) {
        this.sec = this.sec + 1;
        this.mils = 0;
      }
      if (this.sec == 60) {
        this.min = this.min + 1;
        this.sec = 0;
      }
      if (this.min == 60) {
        this.hr = this.hr + 1;
        this.min = 0;
        this.sec = 0;
      }
      if (this.mils < 10 || this.mils == 0) {
        this.mils = '0' + this.mils;
      }
      if (this.sec < 10 || this.sec == 0) {
        this.sec = '0' + this.sec;
      }
      if (this.min < 10 || this.min == 0) {
        this.min = '0' + this.min;
      }
      if (this.hr < 10 || this.hr == 0) {
        this.hr = '0' + this.hr;
      }
      this.stopwatch.nativeElement.innerHTML = this.hr + ':' + this.min + ':' + this.sec + ':' + this.mils;
      setTimeout(() => { this.Repeat() }, 10);
    }
  }

  reset() {
    this.stopwatch.nativeElement.innerHTML = "00:00:00:00";
    this.stoptime = true;
    this.hr = 0;
    this.sec = 0;
    this.min = 0;
    this.mils = 0;
  }


}
