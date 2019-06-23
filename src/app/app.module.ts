import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PapaParseModule } from 'ngx-papaparse';
import { ProcessedDataService } from './processed-data.service';
import { ChartsComponent } from './charts/charts.component';

//import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    PapaParseModule
  ],
  providers: [ProcessedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
