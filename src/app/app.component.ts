import { Component, OnInit, AfterViewInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked } from '@angular/core';
import * as XLSX from 'ts-xlsx';
import { ProcessedDataService } from './processed-data.service';
import { readFile, read} from 'xlsx';
import { from } from 'rxjs';
//import { readFileSync } from 'fs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ProcessedDataService]
})
export class AppComponent {
  name = 'Angular';
  temp = []
  
constructor (private dataService: ProcessedDataService){
  //this.dataService.incomingfile(event);
  //this.dataService.upload();
  //this.temp = this.dataService.temp;
}

incomingfile(){
  this.dataService.incomingfile1(event);
  
}

upload(){
  this.dataService.upload1();
  this.temp = this.dataService.temp;
  
    //console.log(res);
    //console.log(this.temp1);
    //this.temp1 = this.dataService.temp(res);
    //console.log(this.temp1);

  }



 //this.temp1 = this.dataService.temp;
  //console.log("ProcessedData: " + this.temp1);
}










  




















 /* fileChanged(e) {
  console.log(e.target)
  this.file = e.target.files[0];
  var reader = new FileReader();
  let workbook
  reader.onload = function(e) {
    console.log(reader.result)
    // var data = new Uint8Array(reader.result);
    //workbook = read(reader.result, {type: 'array'});
    
  //   /* DO SOMETHING WITH workbook HERE */
 // };
  //console.log(workbook)
  //reader.readAsArrayBuffer(f);
  
//}
// uploadDocument(file) {
//   let fileReader = new FileReader();
//   let csvData;
//   fileReader.onload = (e) => {
//     console.log(fileReader.result);
//     csvData = fileReader.result;
//     return csvData
//     // this.jsonData = this.csvJSON(csvData);
//     // console.log("Data converted to JSON" + this.jsonData);
//   }
//   // fileReader.readAsText(this.file);
// }

//processFile() {
  //console.log(this.file)
  //const wb = readFile(this.file);
  //console.log(wb)
  
  //let fileReader = new FileReader();
  // //let csvData;
  //fileReader.onloadend = (e) => {
    // console.log(fileReader.result);
  //   this.csvData = fileReader.result;
  //   //return csvData
   //}
  //const csvData = this.uploadDocument(this.file)
  //console.log(this.csvData)
  //this.processedData = this.process.csvJSON(wb)
  //console.log(this.processedData)
//} 
 

