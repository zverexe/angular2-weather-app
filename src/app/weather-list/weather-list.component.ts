import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Output() notify: EventEmitter<string> = new EventEmitter();


  currentCity: WeatherItem;

  weatherItems: WeatherItem[];
  week: any = [];

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getCoordinates()
        .subscribe(data=> {
          this.weatherService.loadCurrentCity(data.latitude, data.longitude)
              .subscribe(data=>{
                  let dat = new Date(data.dt*1000).toDateString();
                  let formattedTime = dat.slice(0,10);
                this.currentCity = new WeatherItem(data.name, data.main.temp_min, data.main.temp_max,
                    data.weather[0].main, formattedTime, data.main.humidity, data.main.pressure);
                console.log(data.latitude, data.longitude);

                 this.notify.emit(data.weather[0].main);
              })
        });
        
    this.weatherItems = this.weatherService.getItem();

      this.weatherService.getCoordinates()
          .subscribe(data=> {
              this.weatherService.loadCFiveDay(data.latitude, data.longitude)
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
