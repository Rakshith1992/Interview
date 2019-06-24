import { Injectable } from '@angular/core';
import * as XLSX from 'ts-xlsx';
import { readFile, read} from 'xlsx';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessedDataService {

  constructor() { }
  processedData : any;
  workbook : any;
  temp = []
  arrayBuffer:any;
  file:File;

  incomingfile1(event) 
  {
  return this.file= event.target.files[0]; 
  } 
  
    upload1() {
      let fileReader = new FileReader();
        fileReader.onload = (e) => {
            this.arrayBuffer = fileReader.result;
            var data = new Uint8Array(this.arrayBuffer);
            var arr = new Array();
            for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            this.workbook = XLSX.read(bstr, {type:"binary"});
            this.workbook.Sheets.Sheet1.A1.w = 'Expense'
            this.workbook.Sheets.Sheet1.C1.w = 'Tax'
            this.workbook.Sheets.Sheet1.B1.w = this.workbook.Sheets.Sheet1.B1.w.trim()
            console.log(this.workbook.Sheets.Sheet1.C1.w);
            var first_sheet_name = this.workbook.SheetNames[0];
            //console.log(first_sheet_name)
            var worksheet = this.workbook.Sheets[first_sheet_name];
            console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
            this.processedData = XLSX.utils.sheet_to_json(worksheet);
            console.log("Process: " , this.processedData);
            this.processedData.forEach(item => {
               this.temp.push(item); 
            });
            console.log("Answer:" , this.temp);
            
        }
        fileReader.readAsArrayBuffer(this.file);  
  }
  
  






}
