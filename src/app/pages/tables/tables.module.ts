import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesExampleComponent } from './tables-example/tables-example.component';
import { NormalTablesComponent } from './normal-tables/normal-tables.component';
import { JqueryDatatablesComponent } from './jquery-datatables/jquery-datatables.component';
import { EditableTablesComponent } from './editable-tables/editable-tables.component';
import { TablesColorComponent } from './tables-color/tables-color.component';
import { TableFilterComponent } from './table-filter/table-filter.component';
import { TabledraggerComponent } from './tabledragger/tabledragger.component';
import { TablesRoutingModule } from './tables.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    TablesExampleComponent,
    NormalTablesComponent,
    JqueryDatatablesComponent,
    EditableTablesComponent,
    TablesColorComponent,
    TableFilterComponent,
    TabledraggerComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    TablesRoutingModule,
    SharedModule
  ]
})
export class TablesModule { }
