import { Injectable } from '@angular/core';
import { Observable, Subject, debounceTime, fromEvent, map, take } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { MatSnackBar } from '@angular/material/snack-bar';
import { snakData } from '../interfaces/interfaces';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CreatecollComponent } from '../dialog/createcoll/createcoll.component';


@Injectable()
export class SharedService {

  public colorSetting$: Subject<any> = new Subject();
  public currentUrl$: Subject<string> = new Subject();
  public postDetail_id$: BehaviorSubject<any> = new BehaviorSubject(null);
  public sideBar$: BehaviorSubject<any> = new BehaviorSubject(null);
  public postData$: BehaviorSubject<any> = new BehaviorSubject(null);
  public userDetail$: BehaviorSubject<any> = new BehaviorSubject(null);
  private coll_Id = new BehaviorSubject<any>({});
  cast_Coll_Id = this.coll_Id.asObservable();
  constructor(
    private _snackBar: MatSnackBar, 
    private dialog: MatDialog
    ) { }
  dialogRef: MatDialogRef<CreatecollComponent> | any;
  public open(data: any) {
    this.dialogRef = this.dialog.open(CreatecollComponent, {
      width: '25%',
      disableClose: true
    })
  }
  public confirmed(): Observable<any> { return this.dialogRef.afterClosed().pipe(take(1), map(res => { return res })) }

  editCollection(data: any) { this.coll_Id.next(data); }
  commanFunction() { console.log('hello'); }
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