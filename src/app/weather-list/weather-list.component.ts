import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { WeatherService } from '../service/weather.service';
import { WeatherItem } from '../weather';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {

  currentCity: WeatherItem;

  weatherItems: WeatherItem[];

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getCoordinates()
        .subscribe(data=> {
          this.weatherService.loadCurrentCity(data.lat, data.lon)
              .subscribe(data=>{
                this.currentCity = new WeatherItem(data.name, data.main.temp_min, data.main.temp_max, data.weather[0].description);
                console.log(data);
              })
        });
    this.weatherItems = this.weatherService.getItem();

      this.weatherService.getCoordinates()
          .subscribe(data=> {
              this.weatherService.loadCFiveDay(data.lat, data.lon)
                  .subscribe(data=>{
                      /*this.currentCity = new WeatherItem(data.name, data.main.temp_min, data.main.temp_max, data.weather[0].description);*/
                      const week = {};
                      data.list.forEach(item => {
                          week[item.dt_txt.substring(0,11)][item.dt_txt.substring(11)];
                      })
                      console.log(data);
                      console.log(week);
                  })
          });


  }



}
