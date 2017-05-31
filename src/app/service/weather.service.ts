import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { WeatherItems } from '../weather.data';

import 'rxjs/Rx';

@Injectable()
export class WeatherService {

  constructor(private http: Http) { }


    getCoordinates(){
        return this.http.get('https://ipapi.co/json/')
            .map(res=>res.json());
    }


    loadCurrentCity(lat, lon): Observable<any>{
    return this.http.get('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=7bb9b8b2848e5f49e26dcabb2a77fa38&units=metric')
        .map(res=> res.json())
        .catch(error => {
          console.error(error);
          return Observable.throw(error.json());
        });
  }

    loadCFiveDay(lat, lon): Observable<any>{
        return this.http.get('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast/daily?lat='+lat+'&lon='+lon+'&appid=7bb9b8b2848e5f49e26dcabb2a77fa38&units=metric&cnt=5')
            .map(res=> res.json())
            .catch(error => {
                console.error(error);
                return Observable.throw(error.json());
            });
    }

  searchCity(city: string){
        return this.http.get('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=7bb9b8b2848e5f49e26dcabb2a77fa38&units=metric')
            .map(res=> res.json())
            .catch(error => {
                console.error(error);
                return Observable.throw(error.json());
            });
  }

  addNewCity(weatherItem){
       if(WeatherItems.length>2){
        WeatherItems.pop();
        return WeatherItems.unshift(weatherItem);
      }else{
        return WeatherItems.unshift(weatherItem);
      }  
  }

  getItem(){
      return WeatherItems;
  }
}
