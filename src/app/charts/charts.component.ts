import { Component, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';
import {Chart} from 'chart.js';
import { ProcessedDataService } from '../processed-data.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {
  barChart: [];
  pieChart: [];
  doughnutChart: [];
  temp = []
  
constructor(private chart: ProcessedDataService) { }

  clickMe(){
    this.temp = this.chart.temp;
    let graphData = []
    console.log("chartData: " , this.temp);
    this.temp.forEach((arrayItem) => {
    let z = []
    z.push(arrayItem.Tax)
    z.push(parseFloat(arrayItem.Amount.trim().split('$')[1].replace(/[^\d\.\-]/g, "")))
    z.push(arrayItem.Category)
    graphData.push(z)});
    let uniqueTax = []
    for( let x of graphData){
      if (!uniqueTax.includes([x[0],x[2]])){
        let a = []
        a.push(x[0])
        a.push(x[2])
        uniqueTax.push(a)
        }
      }
      //console.log(uniqueTax)
      let taxSum = []
      for (let x of uniqueTax) {
        let y  = graphData.filter((tax) => tax[0]===x[0])
        let sum = 0
        y.forEach((amount) => {
          sum = sum+amount[1]
        })
        let a = []
        a.push(x[0])
        a.push(sum)
        a.push(x[1])
        taxSum.push(a)
      }
      console.log("TaxSum: " ,taxSum)

    var hashMap = {}
    taxSum.forEach(function(arr){
      hashMap[arr.join("|")] = arr;
    });

    var result = Object.keys(hashMap).map(function(k){
      return hashMap[k]
    })

    let amount = []
    let categories = []
    for(let checkingItem of result){
      amount.push(checkingItem[1])
      categories.push(checkingItem[2])
    }
    console.log(amount);
    console.log(categories);

    this.barChart = new Chart('barCanvas', {
      type: 'bar',
      data: {
          //labels: ['Red', 'Blue', 'Yellow'],
          labels: categories,
          datasets: [{
              label: 'Amount: ',
              data: amount ,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)'   
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)'                  
              ],
              borderWidth: 1
          }]
        },
      options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
      }
    });


    this.pieChart = new Chart('pieCanvas', {
      type: 'pie',
      data: {
        labels: categories,
        datasets: [{
            label: 'Amount: ',
            data: amount ,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'   
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'                  
            ],
            borderWidth: 1
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Total Amount in Dollars in each category'
        }
      }
    });

    this.doughnutChart = new Chart('doughnutCanvas', {
      type: 'doughnut',
      data: {
          //labels: ['Red', 'Blue', 'Yellow'],
        labels: categories,
        datasets: [{
            label: 'Amount: ',
            data: amount ,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'   
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'                  
            ],
            borderWidth: 1
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Total Amount in Dollars in each category'
        }
      }
    });

  }
}
