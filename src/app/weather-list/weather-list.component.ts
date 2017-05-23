import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { WeatherService } from '../service/weather.service';
import { WeatherItem } from '../weather';
import { Week } from '../week';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['weather-list.component.scss']
})
export class WeatherListComponent implements OnInit {

  currentCity: WeatherItem;

  weatherItems: WeatherItem[];
  week: any = [];

  weekForecats;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getCoordinates()
        .subscribe(data=> {
          this.weatherService.loadCurrentCity(data.lat, data.lon)
              .subscribe(data=>{
                this.currentCity = new WeatherItem(data.name, data.main.temp_min, data.main.temp_max, data.weather[0].main);
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
                          let iconUrl = 'https://openweathermap.org/img/w/'+item.weather[0].icon+'.png';
                            this.week.push(new Week(item.temp.min, item.temp.max, item.weather[0].main, formattedTime,
                                item.pressure, iconUrl, item.temp.day, item.temp.night));
                            console.log(this.week);
                      })
                      console.log(data);
                      this.week.splice(0,1);
                  })
          });
  }
}
