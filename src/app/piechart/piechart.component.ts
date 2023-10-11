import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent {
  Highcharts=Highcharts
  chartOptions={}

  constructor(){
    this.chartOptions={
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Students Admission Details - 2023',
        align: 'center',
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    credits:{
      enabled:false
    },
    series: [{
        name: 'Courses',
        colorByPoint: true,
        data: [{
            name: 'MEARN',
            y: 70.67,
            sliced: true,
            selected: true
        }, {
            name: 'PYTHON',
            y: 14.77
        },  {
            name: 'TESTING',
            y: 4.86
        }, {
            name: 'BIG DATA',
            y: 2.63
        }, {
            name: '.NET',
            y: 1.53
        },  {
            name: 'JAVA',
            y: 1.40
        }, {
            name: 'FLUTTER',
            y: 0.84
        }]
    }]
    }
  }
}
