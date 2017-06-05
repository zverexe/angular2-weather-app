import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../service/weather.service';
import { WeatherItem } from '../weather';
import { WeatherItems } from '../weather.data';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['weather-search.component.scss']
})
export class WeatherSearchComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  city: string = '';
  ngOnInit() {

  }

  addCity(){
    console.log(this.city);
    return this.weatherService.searchCity(this.city)
        .subscribe(data=>{
            let dat = new Date(data.dt*1000).toDateString();
            let formattedTime = dat.slice(0,10);
          const weatherItem = new WeatherItem(data.name, data.main.temp_min, data.main.temp_max, data.weather[0].main,
              formattedTime, data.main.humidity, data.main.pressure);
          this.weatherService.addNewCity(weatherItem);
        })
  }
}
