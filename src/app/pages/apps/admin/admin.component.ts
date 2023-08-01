import { Component, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { SelectionModel } from '@angular/cdk/collections';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from 'src/app/shared/interfaces/interfaces';
import { ApiService } from 'src/app/shared/services/api-service';
import { delay, finalize } from 'rxjs';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdminComponent implements OnInit {

  dataSource: any;
  columnsToDisplay:any[] = [
    { name: "id", key: "select", completed: false, sort: false },
    { name: "Profile", key: "pic", completed: false, sort: false },
    { name: "Role", key: "role", completed: false, sort: false },
    { name: "Joined", key: "date", completed: false, sort: true },
    { name: "Type", key: "type", completed: false, sort: true },
    { name: "Amount", key: "amount", completed: false, sort: true },
    { name: "country", key: "country", completed: false, sort: true },
    { name: "state", key: "state", completed: false, sort: true },
    { name: "city", key: "city", completed: false, sort: true },
    { name: "phone", key: "phone", completed: false, sort: true },
    { name: "Status", key: "status", completed: false, sort: false },
  ];
  RowToDisplay: any[] = this.columnsToDisplay?.map(column => column?.key);
  ColumnDisplay: any[] = this.columnsToDisplay?.map(column => column?.key);
  expandedElement!: PeriodicElement | null;
  @ViewChild(MatSort) sort!: MatSort;
  selection = new SelectionModel<any>(true, []);
  selectedRows: any[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageLength:number = 50;
  pageSize:number = 10;
  pageIndex:number= 0;
  strokeWidth:number= 6;
  strokeDiameter:number= 60;
  strokeColor:string= 'accent';
  pageSizeOptions:any[] = [5, 10, 25];
  hidePageSize:boolean = false;
  showPageSizeOptions:boolean = true;
  showFirstLastButtons:boolean = true;
  disabled:boolean = false;
  pageEvent!: PageEvent;
  userFilterByName: any[] = [];
  usersArr: PeriodicElement[] = [];
  isLoading:boolean = false;
  constructor(private _liveAnnouncer: LiveAnnouncer, private apiService: ApiService) { }
  ngOnInit(): void { this.onInitCall(); }

  onInitCall() {
    this.getuserData();

  }

  getuserData() {
    this.isLoading = true;
    this.apiService.getAllUsers().pipe( finalize(() => { this.isLoading = false; })).subscribe((res: any) => {
      if (res) {
        this.usersArr = [];
        res.data?.forEach((data: any, index: number) => {
          this.usersArr?.push({
            'all_data': data,
            'pic': data?.profile,
            'name': data?.first_name + " " + data?.last_name,
            'date': data?.created_at,
            'role': data?.role,
            'type': data?.type,
            'amount': data?.amount,
            'country': data?.country,
            'state': data?.state,
            'city': data?.city,
            'phone': data?.phone,
            'status': JSON.parse(data?.status),
          })
          this.dataSource = new MatTableDataSource(this.usersArr);
          this.userFilterByName = this.usersArr;
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.isLoading = false;
        });
      }
    });
  }
  SortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  isAllSelected() {
    const numSelected = this.selection?.selected?.length;
    const numRows = this.dataSource?.data?.length;
    return numSelected === numRows;
  }

  masterToggle() {
    if (this.isSomeSelected()) {
      this.selection.clear();
    } else {
      this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach((row: any) => this.selection.select(row));
      this.selectedRows = this.selection.selected;
    }
  }

  isSomeSelected() { return this.selection?.selected?.length > 0; }
  getSelected(event: MatCheckboxChange, row: any) {
    if (event.checked) {
      this.selectedRows.push(row);
    } else {
      const index = this.selectedRows.indexOf(row);
      if (index >= 0) {
        this.selectedRows.splice(index, 1);
      }
    }
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.pageLength = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) { this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str); }
  }

  searchUserByName(event: any) {
    this.usersArr = this.userFilterByName;
    this.usersArr = this.usersArr?.filter(i => (i?.name)?.toLowerCase()?.indexOf((event?.target as HTMLInputElement)?.value?.toLocaleLowerCase()) !== -1);
    this.dataSource = new MatTableDataSource(this.usersArr);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event?.previousContainer === event?.container) {
      moveItemInArray(event?.container?.data, event?.previousIndex, event?.currentIndex);
      this.ColumnDisplay = Array.from(new Set([...event?.container?.data, ...this.ColumnDisplay]));
    } else {
      transferArrayItem(
        event?.previousContainer?.data,
        event?.container?.data,
        event?.previousIndex,
        event?.currentIndex,
      );
    }
  }

  getColumn(event: MatCheckboxChange, cell: any) {
    if (event.checked) {
      this.RowToDisplay.push(cell);
    } else {
      const index = this.RowToDisplay.indexOf(cell);
      if (index >= 0) {
        this.RowToDisplay.splice(index, 1);
      }
    }
  }

}
