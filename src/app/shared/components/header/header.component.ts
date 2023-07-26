import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserlogComponent } from '../../dialog/userlog/userlog.component';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'header-in',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {

  constructor(
    public dialog: MatDialog, 
    private router: Router,
    public shared_sevice: SharedService,
    ) { }
  title: string = 'prepangular';
  gsearchCtr = new FormControl();
  sColor: any;

  ngOnInit(): void {
    this.shared_sevice.colorSetting$.subscribe((res: any) => {
      this.sColor = res ? res : "#ffffff";
    });
  }

  openDialog(type: any = ''): void {
    let dialogType: any;
    if (type == 'Registor') { dialogType = 'Registor' }
    if (type == 'Login') { dialogType = 'Login' }
    const dialogRef = this.dialog.open(UserlogComponent, { width: '36vw', data: { type: dialogType, data: [] }, });
    dialogRef.afterClosed().subscribe(result => { });
  }

  goToPage(data: any) { 
    this.router.navigate([`${data}`]);
 }

}
