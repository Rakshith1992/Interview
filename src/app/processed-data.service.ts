import { Injectable } from '@angular/core';
import * as XLSX from 'ts-xlsx';

@Injectable({
  providedIn: 'root'
})
export class ProcessedDataService {

  constructor() { }
  data = [];
  file:File;
  
  incomingfile1(event) 
  {
  return this.file= event.target.files[0]; 
  } 
    
  upload() {
    let arrayBuffer:any;
    let workbook : any;
    let processedData : any;
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      arrayBuffer = fileReader.result;
      let data = new Uint8Array(arrayBuffer);
      let arr = new Array();
      for(let i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      let bstr = arr.join("");
      workbook = XLSX.read(bstr, {type:"binary"});
      workbook.Sheets.Sheet1.A1.w = 'Expense';
      workbook.Sheets.Sheet1.C1.w = 'Tax';
      workbook.Sheets.Sheet1.B1.w = workbook.Sheets.Sheet1.B1.w.trim();
      let first_sheet_name = workbook.SheetNames[0];
      let worksheet = workbook.Sheets[first_sheet_name];
      processedData = XLSX.utils.sheet_to_json(worksheet);
      processedData.forEach(item => {
        this.data.push(item); 
      });   
    }
    fileReader.readAsArrayBuffer(this.file);  
  }

  calculateAmount(data){
    let graphData = [];
    let taxSum = [];
    data.forEach((arrayItem) => {
    let arrayValue = [];
    arrayValue.push(arrayItem.Tax)
    arrayValue.push(parseFloat(arrayItem.Amount.trim().split('$')[1].replace(/[^\d\.\-]/g, "")));
    arrayValue.push(arrayItem.Category);
    graphData.push(arrayValue)});
    let uniqueTax = [];
    for( let x of graphData){
      if (!uniqueTax.includes([x[0],x[2]])){
        let tempVariable = [];
        tempVariable.push(x[0]);
        tempVariable.push(x[2]);
        uniqueTax.push(tempVariable);
      }
    }
    for (let item of uniqueTax) {
      let filteredArray  = graphData.filter((tax) => tax[0]===item[0]);
      let sum = 0;
      filteredArray.forEach((amount) => {
        sum = sum+amount[1];
      })
      let addArray = [];
      addArray.push(item[0]);
      addArray.push(sum);
      addArray.push(item[1]);
      taxSum.push(addArray);
    }   
    let hashMap = {}
    taxSum.forEach(function(arr){
      hashMap[arr.join("|")] = arr;
    });
    let result = Object.keys(hashMap).map(function(k){
      return hashMap[k] ;    
    })
    let categories = [];
    let amount = [];
    for(let checkingItem of result){
      amount.push(checkingItem[1]);
      categories.push(checkingItem[2]);
    }
    return {
      amount,
      categories,
    };
  }
}
