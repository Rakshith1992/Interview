import { Component, OnInit, Input } from '@angular/core';
import { ProcessedDataService } from '../processed-data.service';
import {Sort} from '@angular/material/sort';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input() result;
  temp = [];
  sortedData;
  
  constructor (private dataService: ProcessedDataService){
    this.temp = this.dataService.data;
    this.sortedData = this.temp;
  }

  ngOnInit() {
  }

  sortData(sort: Sort) {
    const data = this.sortedData.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }
    
    this.sortedData = data.sort((a, b) => {
      return compare(a[sort.active], 
        b[sort.active], 
        sort.direction === 'asc');
    });

    
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

