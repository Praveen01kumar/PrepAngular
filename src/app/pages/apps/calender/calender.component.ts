import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Calendar, CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],
})

export class CalenderComponent implements OnInit {
  addEventField: boolean = false;
  addEventForm!: FormGroup;
  submitted = false;
  colorPicked: any;
  minDate = new Date;
  eventsArr: any[] = [];
  badgeArr: any[] = [
    { name: "Marketing", color: "#9A9A9A" },
    { name: "Design Task", color: "#49c5b6" },
    { name: "Development", color: "#22af46" },
    { name: "Finance", color: "#3C89DA" },
    { name: "Meeting", color: "#f3ad06" },
    { name: "Conference", color: "#de4848" },
  ];
  memberList: any[] = [
    { name: "avatar1", img: "assets/avatar/avatar1.jpg" },
    { name: "avatar2", img: "assets/avatar/avatar2.jpg" },
    { name: "avatar3", img: "assets/avatar/avatar3.jpg" },
    { name: "avatar4", img: "assets/avatar/avatar4.jpg" },
    { name: "avatar5", img: "assets/avatar/avatar5.jpg" },
  ]
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, timeGrigPlugin, listPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    events: this.eventsArr,
    // events: [
    //   {
    //     title: 'Going to Home 1',
    //     start: '2023-02-21',
    //     end: '2023-02-23',
    //     backgroundColor: 'red',
    //     borderColor: 'red',
    //   },
    //   {
    //     title: 'Going to Home 2',
    //     date: '2023-01-17',
    //     backgroundColor: 'green',
    //     borderColor: 'green',
    //   },
    //   {
    //     title: 'Going to Home 3',
    //     date: '2023-01-13',
    //   },
    //   {
    //     title: 'Going to Home 4',
    //     date: '2023-01-19',
    //     backgroundColor: '#49c5b6',
    //     borderColor: '#49c5b6',
    //   }
    // ],
    headerToolbar: { left: 'prev today next', center: 'title', right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek', },
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,

  };

  @ViewChild('calendar', { static: true }) calendar1: ElementRef<any> | any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { this.eventForm(); }
  eventForm() { this.addEventForm = this.fb.group({ title: ['', Validators.required], singaleDate: ['', Validators.required], start_date: ['', Validators.required], end_date: ['', Validators.required], bgColor: ['', Validators.required], }); }
  get adfc() { return this.addEventForm.controls; }
  onReset() { this.submitted = false; this.addEventForm.reset(); this.addEventField = false; }
  changeColor(event: any) { this.colorPicked = event?.target?.value; this.addEventForm?.controls['bgColor'].setValue(event?.target?.value); }
  changeColor1(event: any) { this.colorPicked = event?.target?.value ? ('#' + event?.target?.value.replace(/#/g, "")) : null; this.addEventForm?.controls['bgColor'].setValue(this.colorPicked); }
  submitForm() {
    this.submitted = true;
    if (this.addEventForm.invalid) {
      return;
    }

    this.eventsArr.push(
      {
        title: this.addEventForm?.value?.title,
        date: this.addEventForm?.value?.singaleDate,
        // start: this.addEventForm?.value?.start_date,
        // end: this.addEventForm?.value?.end_date,
        backgroundColor: this.addEventForm?.value?.bgColor,
        borderColor: this.addEventForm?.value?.bgColor,
      }
    )
    console.log(this.eventsArr);
    this.addEventField = false;

  }
  onChange(event: any, type: any) {
    type === 'singaleDate' ? this.addEventForm?.controls['singaleDate']?.setValue(moment(event?.value)?.format('YYYY-MM-DD')) :
      type === 'start_date' ? this.addEventForm?.controls['start_date']?.setValue(moment(event?.value)?.format('YYYY-MM-DD')) :
        type === 'end_date' ? this.addEventForm?.controls['end_date']?.setValue(moment(event?.value)?.format('YYYY-MM-DD')) : null;
  }

  patchEvent() {
    this.addEventForm.patchValue({
      title: 'event 1',
      singaleDate: "2023-01-25",
      start_date: "2023-01-01",
      end_date: "2023-01-02",
      bgColor: '#ffffcc'
    })
  }


}
