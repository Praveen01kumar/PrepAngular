import { Injectable } from '@angular/core';
import { Observable, Subject, debounceTime, fromEvent, map } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { MatSnackBar } from '@angular/material/snack-bar';
import { snakData } from '../interfaces/interfaces';


@Injectable()
export class SharedService {

  public colorSetting$: Subject<any> = new Subject();
  public currentUrl$: Subject<string> = new Subject();
  public postDetail_id$: BehaviorSubject<any> = new BehaviorSubject(null);
  public sideBar$: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private _snackBar: MatSnackBar) { }

  // priority: any[] = ['Medium'];
  // status: any[] = ['Backlog', 'Selected', 'InProgress', 'Done', 'Preview', 'Review'];
  // title: any[] = [
  //   'Behind the 900 stars - Update 08/2020',
  //   'Set up Akita state management',
  //   'Preparing backend API with GraphQL',
  //   'Prewing your Done items',
  //   'Reviewing your Preview items',
  //   'your Selected Previews',
  //   'Reviewing your Backlogs',
  // ];
  // type: any[] = ['Story'];
  // dataArr: any[] = [
  //   {
  //     id: 'Backlog',
  //     title: "Backlog",
  //     innerArr: [
  //       {
  //         id: Math.floor(Math.random() * 10000 + 1000),
  //         priority: this.priority[Math.floor(Math.random() * this.priority?.length)],
  //         status: this.status[Math.floor(Math.random() * this.status?.length)],
  //         title: this.title[Math.floor(Math.random() * this.title?.length)],
  //         type: this.type[Math.floor(Math.random() * this.type?.length)],
  //       },
  //       {
  //         id: Math.floor(Math.random() * 10000 + 1000),
  //         priority: this.priority[Math.floor(Math.random() * this.priority?.length)],
  //         status: this.status[Math.floor(Math.random() * this.status?.length)],
  //         title: this.title[Math.floor(Math.random() * this.title?.length)],
  //         type: this.type[Math.floor(Math.random() * this.type?.length)],
  //       },
  //       {
  //         id: Math.floor(Math.random() * 10000 + 1000),
  //         priority: this.priority[Math.floor(Math.random() * this.priority?.length)],
  //         status: this.status[Math.floor(Math.random() * this.status?.length)],
  //         title: this.title[Math.floor(Math.random() * this.title?.length)],
  //         type: this.type[Math.floor(Math.random() * this.type?.length)],
  //       },
  //       {
  //         id: Math.floor(Math.random() * 10000 + 1000),
  //         priority: this.priority[Math.floor(Math.random() * this.priority?.length)],
  //         status: this.status[Math.floor(Math.random() * this.status?.length)],
  //         title: this.title[Math.floor(Math.random() * this.title?.length)],
  //         type: this.type[Math.floor(Math.random() * this.type?.length)],
  //       },
  //       {
  //         id: Math.floor(Math.random() * 10000 + 1000),
  //         priority: this.priority[Math.floor(Math.random() * this.priority?.length)],
  //         status: this.status[Math.floor(Math.random() * this.status?.length)],
  //         title: this.title[Math.floor(Math.random() * this.title?.length)],
  //         type: this.type[Math.floor(Math.random() * this.type?.length)],
  //       }
  //     ]
  //   },
  //   {
  //     id: 'Selected',
  //     title: "Selected",
  //     innerArr: [
  //       {
  //         id: Math.floor(Math.random() * 10000 + 1000),
  //         priority: this.priority[Math.floor(Math.random() * this.priority?.length)],
  //         status: this.status[Math.floor(Math.random() * this.status?.length)],
  //         title: this.title[Math.floor(Math.random() * this.title?.length)],
  //         type: this.type[Math.floor(Math.random() * this.type?.length)],
  //       },
  //       {
  //         id: Math.floor(Math.random() * 10000 + 1000),
  //         priority: this.priority[Math.floor(Math.random() * this.priority?.length)],
  //         status: this.status[Math.floor(Math.random() * this.status?.length)],
  //         title: this.title[Math.floor(Math.random() * this.title?.length)],
  //         type: this.type[Math.floor(Math.random() * this.type?.length)],
  //       },
  //       {
  //         id: Math.floor(Math.random() * 10000 + 1000),
  //         priority: this.priority[Math.floor(Math.random() * this.priority?.length)],
  //         status: this.status[Math.floor(Math.random() * this.status?.length)],
  //         title: this.title[Math.floor(Math.random() * this.title?.length)],
  //         type: this.type[Math.floor(Math.random() * this.type?.length)],
  //       },
  //       {
  //         id: Math.floor(Math.random() * 10000 + 1000),
  //         priority: this.priority[Math.floor(Math.random() * this.priority?.length)],
  //         status: this.status[Math.floor(Math.random() * this.status?.length)],
  //         title: this.title[Math.floor(Math.random() * this.title?.length)],
  //         type: this.type[Math.floor(Math.random() * this.type?.length)],
  //       }
  //     ]
  //   },
  //   {
  //     id: 'InProgress',
  //     title: "In Progress",
  //     innerArr: [
  //       {
  //         id: Math.floor(Math.random() * 10000 + 1000),
  //         priority: this.priority[Math.floor(Math.random() * this.priority?.length)],
  //         status: this.status[Math.floor(Math.random() * this.status?.length)],
  //         title: this.title[Math.floor(Math.random() * this.title?.length)],
  //         type: this.type[Math.floor(Math.random() * this.type?.length)],
  //       },
  //       {
  //         id: Math.floor(Math.random() * 10000 + 1000),
  //         priority: this.priority[Math.floor(Math.random() * this.priority?.length)],
  //         status: this.status[Math.floor(Math.random() * this.status?.length)],
  //         title: this.title[Math.floor(Math.random() * this.title?.length)],
  //         type: this.type[Math.floor(Math.random() * this.type?.length)],
  //       },
  //       {
  //         id: Math.floor(Math.random() * 10000 + 1000),
  //         priority: this.priority[Math.floor(Math.random() * this.priority?.length)],
  //         status: this.status[Math.floor(Math.random() * this.status?.length)],
  //         title: this.title[Math.floor(Math.random() * this.title?.length)],
  //         type: this.type[Math.floor(Math.random() * this.type?.length)],
  //       }
  //     ]
  //   },
  //   {
  //     id: 'Done',
  //     title: "Done",
  //     innerArr: [
  //       {
  //         id: Math.floor(Math.random() * 10000 + 1000),
  //         priority: this.priority[Math.floor(Math.random() * this.priority?.length)],
  //         status: this.status[Math.floor(Math.random() * this.status?.length)],
  //         title: this.title[Math.floor(Math.random() * this.title?.length)],
  //         type: this.type[Math.floor(Math.random() * this.type?.length)],
  //       },
  //       {
  //         id: Math.floor(Math.random() * 10000 + 1000),
  //         priority: this.priority[Math.floor(Math.random() * this.priority?.length)],
  //         status: this.status[Math.floor(Math.random() * this.status?.length)],
  //         title: this.title[Math.floor(Math.random() * this.title?.length)],
  //         type: this.type[Math.floor(Math.random() * this.type?.length)],
  //       },
  //       {
  //         id: Math.floor(Math.random() * 10000 + 1000),
  //         priority: this.priority[Math.floor(Math.random() * this.priority?.length)],
  //         status: this.status[Math.floor(Math.random() * this.status?.length)],
  //         title: this.title[Math.floor(Math.random() * this.title?.length)],
  //         type: this.type[Math.floor(Math.random() * this.type?.length)],
  //       },
  //       {
  //         id: Math.floor(Math.random() * 10000 + 1000),
  //         priority: this.priority[Math.floor(Math.random() * this.priority?.length)],
  //         status: this.status[Math.floor(Math.random() * this.status?.length)],
  //         title: this.title[Math.floor(Math.random() * this.title?.length)],
  //         type: this.type[Math.floor(Math.random() * this.type?.length)],
  //       }
  //     ]
  //   },
  //   {
  //     id: 'Preview',
  //     title: "Preview",
  //     innerArr: [
  //       {
  //         id: Math.floor(Math.random() * 10000 + 1000),
  //         priority: this.priority[Math.floor(Math.random() * this.priority?.length)],
  //         status: this.status[Math.floor(Math.random() * this.status?.length)],
  //         title: this.title[Math.floor(Math.random() * this.title?.length)],
  //         type: this.type[Math.floor(Math.random() * this.type?.length)],
  //       },
  //       {
  //         id: Math.floor(Math.random() * 10000 + 1000),
  //         priority: this.priority[Math.floor(Math.random() * this.priority?.length)],
  //         status: this.status[Math.floor(Math.random() * this.status?.length)],
  //         title: this.title[Math.floor(Math.random() * this.title?.length)],
  //         type: this.type[Math.floor(Math.random() * this.type?.length)],
  //       }
  //     ]
  //   },
  //   {
  //     id: 'Review',
  //     title: "Review",
  //     innerArr: [
  //       {
  //         id: Math.floor(Math.random() * 10000 + 1000),
  //         priority: this.priority[Math.floor(Math.random() * this.priority?.length)],
  //         status: this.status[Math.floor(Math.random() * this.status?.length)],
  //         title: this.title[Math.floor(Math.random() * this.title?.length)],
  //         type: this.type[Math.floor(Math.random() * this.type?.length)],
  //       },
  //       {
  //         id: Math.floor(Math.random() * 10000 + 1000),
  //         priority: this.priority[Math.floor(Math.random() * this.priority?.length)],
  //         status: this.status[Math.floor(Math.random() * this.status?.length)],
  //         title: this.title[Math.floor(Math.random() * this.title?.length)],
  //         type: this.type[Math.floor(Math.random() * this.type?.length)],
  //       },
  //       {
  //         id: Math.floor(Math.random() * 10000 + 1000),
  //         priority: this.priority[Math.floor(Math.random() * this.priority?.length)],
  //         status: this.status[Math.floor(Math.random() * this.status?.length)],
  //         title: this.title[Math.floor(Math.random() * this.title?.length)],
  //         type: this.type[Math.floor(Math.random() * this.type?.length)],
  //       }
  //     ]
  //   }
  // ];

  snake(data: snakData) {
    this._snackBar.open(data?.message, data?.action ? data?.action : 'OK', {
      horizontalPosition: data?.hrposition ? data?.hrposition : 'end',
      verticalPosition: data?.vrposition ? data?.vrposition : 'top',
      duration: data?.duration ? data?.duration : 5000
    });
  }

  getScrollPercentage(): Observable<number> {
    return fromEvent(window, 'scroll').pipe(debounceTime(50), map(() => {
      const scrollTop = window?.pageYOffset || document?.documentElement?.scrollTop || document?.body?.scrollTop || 0;
      const windowHeight = window?.innerHeight || document?.documentElement?.clientHeight || document?.body?.clientHeight || 0;
      const documentHeight = document?.documentElement?.scrollHeight || document?.body?.scrollHeight || 0;
      return (scrollTop / (documentHeight - windowHeight)) * 100;
    })
    );
  }

  Url(url: string): string {
    const format = url?.replace('https://www.', '')?.replace('http://www.', '')?.replace('https://', '')?.replace('http://', '')?.replace('https:', '')?.replace('http:', '')?.replace('https', '')?.replace('http', '')?.replace('www.', '')?.replace('www', '');
    return `https://${format}`;
  }


}