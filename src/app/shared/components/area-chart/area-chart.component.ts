import { Component, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexFill
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  fill: ApexFill;
};
@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss']
})
export class AreaChartComponent {
  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Rope",
          data: [31, 40, 28]
        },
        {
          name: "Twine",
          data: [20, 30, 20]
        },
        {
          name: "Fish Net",
          data: [25, 35, 45]
        },
      ],

      chart: {
        height: 180,
        type: "area",
        toolbar: {
          show: false
        },
      },
      fill: {
        colors:['rgb(0, 143, 251)','rgb(0, 227, 150)','rgb(254, 176, 25)']
      },
      dataLabels: {
        enabled: false,
        style: {
          colors: ['#F44336', '#E91E63', '#9C27B0']
        }
      },
      stroke: {
        curve: "smooth",
        colors: ["rgb(0, 143, 251)",'rgb(0, 227, 150)', 'rgb(254, 176, 25)'],
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-07-17T00:00:00.000Z",
          "2018-08-29T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
  }

  // public generateData(baseval:any, count:any, yrange:any) {
  //   var i = 0;
  //   var series = [];
  //   while (i < count) {
  //     var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
  //     var y =
  //       Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
  //     var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

  //     series.push([x, y, z]);
  //     baseval += 86400000;
  //     i++;
  //   }
  //   console.log(series)
  //   return series;
  // }
}
