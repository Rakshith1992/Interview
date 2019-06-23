import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { ProcessedDataService } from '../processed-data.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {

  storeArray = []

  constructor(private chart: ProcessedDataService) { }

  clickMe(){
    //this.temp = this.chart.temp;
    //console.log("chartData: " + this.temp);
    //this.chart.temp.subscribe()
    /* let temp;
    temp = this.chart.workbook.sheets.Sheet1.B1.w;
    if(temp == '8450'){

    }
    else if(temp == '9270'){
    }
    else(temp == '9284'){
    }
    
    } */

  
 

}
}
