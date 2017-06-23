import { Component, Input } from '@angular/core';

import { WeatherService } from '../service/weather.service';
import { WeatherItem } from '../weather';
import { Week } from '../week';


@Component({
  selector: 'app-thunderstorm',
  templateUrl: './thunderstorm.component.html',
  styleUrls: ['./thunderstorm.component.scss']
})
export class ThunderstormComponent {

  constructor() { }

  @Input() currentCity: WeatherItem;

  @Input() weatherItems: WeatherItem[];

  @Input() week: any = [];
}
