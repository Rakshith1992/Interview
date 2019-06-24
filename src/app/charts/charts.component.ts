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
  username = "";
  //categories = []
  //amount =[]
  
constructor(private chartService: ProcessedDataService) { }

  clickMe(){
    
    let chartVal = this.chartService.calculateAmount(this.chartService.data);
    let categories = chartVal.categories;
    let amount = chartVal.amount;

    console.log("Categories:" , categories );
    console.log("Amount:" , amount );


    this.barChart = new Chart('barCanvas', {
      type: 'bar',
      title: "hey",
      data: {
          //labels: ['Red', 'Blue', 'Yellow'],
          labels: categories,
          datasets: [{
              label: 'Amount: ',
              data: amount,
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
        labels: categories,
        datasets: [{
            label: 'Amount',
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
          text: `${this.username}`
        }
      }
    });
  } 
}
