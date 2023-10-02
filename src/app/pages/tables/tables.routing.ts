import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablesExampleComponent } from './tables-example/tables-example.component';
import { JqueryDatatablesComponent } from './jquery-datatables/jquery-datatables.component';
import { EditableTablesComponent } from './editable-tables/editable-tables.component';
import { NormalTablesComponent } from './normal-tables/normal-tables.component';
import { TablesColorComponent } from './tables-color/tables-color.component';
import { TableFilterComponent } from './table-filter/table-filter.component';
import { TabledraggerComponent } from './tabledragger/tabledragger.component';

export const tableRoutes: Routes = [
    { path: 'dashboard', component: TablesExampleComponent },
    { path: 'texample', component: TablesExampleComponent },
    { path: 'ntables', component: NormalTablesComponent },
    { path: 'jdatatables', component: JqueryDatatablesComponent },
    { path: 'etables', component: EditableTablesComponent },
    { path: 'tcolor', component: TablesColorComponent },
    { path: 'tfilter', component: TableFilterComponent },
    { path: 'tdragger', component: TabledraggerComponent },
];

@NgModule({
    imports: [RouterModule.forChild(tableRoutes)],
    exports: [RouterModule]
})
export class TablesRoutingModule { }
