import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../service/weather.service';
import { WeatherItem } from '../weather';
import { Week } from '../week';

@Component({
  selector: 'app-sun',
  templateUrl: './sun.component.html',
  styleUrls: ['./sun.component.scss']
})
export class SunComponent implements OnInit {

  currentCity: WeatherItem;

  weatherItems: WeatherItem[];

  week: any = [];

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.weatherService.getCoordinates()
        .subscribe(data => {
          this.weatherService.loadCurrentCity(data.lat, data.lon)
              .subscribe(data => {
                let dat = new Date(data.dt * 1000).toDateString();
                let formattedTime = dat.slice(0, 10);
                this.currentCity = new WeatherItem(data.name, data.main.temp_min, data.main.temp_max,
                    data.weather[0].main, formattedTime, data.main.humidity, data.main.pressure);
                console.log(data);
              })
        });
    this.weatherItems = this.weatherService.getItem();
    this.weatherService.getCoordinates()
        .subscribe(data=> {
          this.weatherService.loadCFiveDay(data.lat, data.lon)
              .subscribe(data=>{
                data.list.forEach(item => {
                  let dat = new Date(item.dt*1000).toDateString();
                  let formattedTime = dat.slice(0,10);
                  this.week.push(new Week(item.temp.min, item.temp.max, item.weather[0].main, formattedTime,
                      item.pressure, item.humidity, item.speed, item.temp.day, item.temp.night));
                  console.log(this.week);
                })
                console.log(data);
                this.week.splice(0,1);
              })
        });
  }

}
