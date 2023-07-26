import { animate, state, style, transition, trigger } from '@angular/animations';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { SelectionModel } from '@angular/cdk/collections';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import Chart from 'chart.js/auto';
import { PeriodicElement } from 'src/app/shared/interfaces/interfaces';
import { ApiService } from 'src/app/shared/services/api-service';

@Component({
  selector: 'cryptocurrency',
  templateUrl: './cryptocurrency.component.html',
  styleUrls: ['./cryptocurrency.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CryptocurrencyComponent implements OnInit {
  uCardArr: any[] = [
    { icon: "bi bi-cash-stack", iconcolor: "#3C89DA", text: "Bitcoin", num: "0.005034", },
    { icon: "bi bi-cash-stack", iconcolor: "#f3ad06", text: "Ethereum", num: "0.000359" },
    { icon: "bi bi-wallet2", iconcolor: "##444", text: "Ripple", num: "0.000025" },
    { icon: "bi bi-credit-card", iconcolor: "#3C89DA", text: "Neo", num: "0.000482", },
    { icon: "bi bi-wallet2", iconcolor: "#22af46", text: "Cardano", num: "0.000434" },
    { icon: "bi bi-credit-card", iconcolor: "#de4848", text: "Stellar", num: "0.000125", },
    { icon: "bi bi-cash-stack", iconcolor: "#22af46", text: "RaiBlocks", num: "0.000009" },
    { icon: "bi bi-credit-card", iconcolor: "#444", text: "Monero", num: "0.000725", }
  ];
  @ViewChild('projectsChart', { static: true }) projectsChart!: ElementRef;
  prdChart!: Chart;
  @ViewChild('tValueChart', { static: true }) tValueChart!: ElementRef;
  tvChart!: Chart;
  @ViewChild('mValueChart', { static: true }) mValueChart!: ElementRef;
  mvChart!: Chart;
  customersArr: any[] = [
    {
      head: ["#", "Product", "Customers", "Total"],
      product: "Bitcoin BTC", customer: [{ img: "assets/avatar/avatar1.jpg" }, { img: "assets/avatar/avatar2.jpg" }, { img: "assets/avatar/avatar3.jpg" }], price: "$83"
    },
    { product: "Neo NEO", customer: [{ img: "assets/avatar/avatar4.jpg" }, { img: "assets/avatar/avatar5.jpg" }, { img: "assets/avatar/avatar1.jpg" }], price: "$66" },
    { product: "Dash DASH", customer: [{ img: "assets/avatar/avatar5.jpg" }, { img: "assets/avatar/avatar4.jpg" }, { img: "assets/avatar/avatar3.jpg" }], price: "$93" },
    { product: "Ripple XRP", customer: [{ img: "assets/avatar/avatar2.jpg" }], price: "$178", total: "$17,700" },
    { product: "Bitcoin DASH", customer: [{ img: "assets/avatar/avatar3.jpg" }, { img: "assets/avatar/avatar4.jpg" }, { img: "assets/avatar/avatar5.jpg" }], price: "$83" },
    { product: "Dash XRP", customer: [{ img: "assets/avatar/avatar5.jpg" }, { img: "assets/avatar/avatar2.jpg" }, { img: "assets/avatar/avatar4.jpg" }, { img: "assets/avatar/avatar1.jpg" }], price: "$75" },
  ];
  dataSource: any;
  columnsToDisplay = [
    { name: "id", key: "select", completed: false, sort: false },
    { name: "Date", key: "date", completed: false, sort: true },
    { name: "Type", key: "type", completed: false, sort: true },
    { name: "Amount", key: "amount", completed: false, sort: true },
    { name: "Remaining", key: "remaining", completed: false, sort: true },
    { name: "Price", key: "price", completed: false, sort: true },
    { name: "USD", key: "usd", completed: false, sort: true },
    { name: "Fee", key: "fee", completed: false, sort: true },
    { name: "Status", key: "status", completed: false, sort: false },
  ];
  RowToDisplay: any[] = this.columnsToDisplay?.map(column => column?.key);
  ColumnDisplay: any[] = this.columnsToDisplay?.map(column => column?.key);
  expandedElement!: PeriodicElement | null;
  @ViewChild(MatSort) sort!: MatSort;
  selection = new SelectionModel<any>(true, []);
  selectedRows: any[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageLength = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;
  pageEvent!: PageEvent;
  customerFilterByName: any[] = [];
  aOrderArr: any[] = [];
  constructor(private _liveAnnouncer: LiveAnnouncer, private apiService: ApiService) { }
  ngOnInit(): void {
    this.onInitCall();
  }

  onInitCall() {
    this.createChart();
    this.getuserData();
  }

  getuserData() {
    this.apiService.getUsers().subscribe((res: any) => {
      if (res) {
        this.aOrderArr = res.topicsArr;
        this.dataSource = new MatTableDataSource(this.aOrderArr);
        this.customerFilterByName = this.aOrderArr;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    });
  }
  createChart() {
    this.prdChart = new Chart(this.projectsChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Bitcoin',
          data: ['100', '76', '32', '79', '892', '574', '473', '634', '76', '892', '32', '100'],
          backgroundColor: 'rgba(75, 192, 192, 0.6)', borderColor: 'rgba(75, 192, 192, 0.6)', tension: 0.2, borderWidth: 1,
        },
        {
          label: 'Ethereum',
          data: ['10', '276', '37', '79', '92', '574', '173', '32', '79', '892', '574', '473'],
          backgroundColor: 'rgba(192, 75, 192, 0.6)', borderColor: 'rgba(192, 75, 192, 0.6)', tension: 0.2, borderWidth: 1,
        },
        {
          label: 'Ripple',
          data: ['120', '76', '32', '79', '892', '574', '473', '372', '579', '92', '74', '73'],
          backgroundColor: 'rgba(247, 0, 28, 0.6)', borderColor: 'rgba(247, 0, 28, 0.6)', tension: 0.2, borderWidth: 1,
        },
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 5, transitions: { show: { animations: { x: { from: 0 }, y: { from: 0 } } }, hide: { animations: { x: { to: 0 }, y: { to: 0 } } } },
        scales: { x: { grid: { display: true } }, y: { grid: { display: false } } },
        interaction: { intersect: false, },
        plugins: { legend: { display: true }, },
      }
    });
    // total earning value chart
    this.tvChart = new Chart(this.tValueChart.nativeElement, {
      type: 'pie',
      data: {
        labels: ["Bitcoin", "Ethereum", "Ripple", "Neo", "Cardano"],
        datasets: [{
          label: "Value", data: [573, 376, 672, 719, 192],
          backgroundColor: ['rgba(0, 155, 60, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(192, 75, 192, 0.6)', 'rgba(247, 0, 28, 0.6)', 'rgba(243, 219, 127, 0.6)'], borderColor: 'rgba(0, 155, 60, 0.6)', borderWidth: 0,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        transitions: { show: { animations: { x: { from: 0 }, y: { from: 0 } } }, hide: { animations: { x: { to: 0 }, y: { to: 0 } } } }
      }
    });

    // monthly earning value chart 
    this.mvChart = new Chart(this.mValueChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Bitcoin', 'Ethereum', 'Ripple', 'Neo', 'Cardano', 'Stellar', 'RaiBlocks', 'Monero', 'Ripple 1', 'Neo 1', 'Cardano 1', 'Stellar 1'],
        datasets: [{
          label: "Value", data: ['100', '76', '32', '79', '892', '574', '473', '10', '769', '302', '9', '192'],
          backgroundColor: [
            'rgba(75, 192, 192, 0.6)',
            'rgba(192, 75, 192, 0.6)',
            'rgba(247, 0, 28, 0.6)',
            'rgba(243, 219, 127, 0.6)',
            'rgba(0, 155, 60, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(192, 75, 192, 0.6)',
            'rgba(247, 0, 28, 0.6)',
            'rgba(243, 219, 127, 0.6)',
            'rgba(0, 155, 60, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(192, 75, 192, 0.6)'
          ], borderColor: 'rgba(0, 155, 60, 0.6)',
          borderWidth: 0,

        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 5, transitions: { show: { animations: { x: { from: 0 }, y: { from: 0 } } }, hide: { animations: { x: { to: 0 }, y: { to: 0 } } } },
        scales: { x: { display: false }, y: { display: false }, },
        plugins: { legend: { display: false, }, },
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

  searchAiByName(event: any) {
    this.aOrderArr = this.customerFilterByName;
    this.aOrderArr = this.aOrderArr?.filter(i => (i?.date)?.toLowerCase()?.indexOf((event?.target as HTMLInputElement)?.value?.toLocaleLowerCase()) !== -1);
    this.dataSource = new MatTableDataSource(this.aOrderArr);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.ColumnDisplay = Array.from(new Set([...event.container.data, ...this.ColumnDisplay]));;
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
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
