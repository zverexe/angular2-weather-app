import { Component, Input } from '@angular/core';

import { WeatherService } from '../service/weather.service';
import { WeatherItem } from '../weather';
import { Week } from '../week';

@Component({
  selector: 'app-sun',
  templateUrl: './sun.component.html',
  styleUrls: ['./sun.component.scss']
})
export class SunComponent {

    @Input() currentCity: WeatherItem;

    @Input() weatherItems: WeatherItem[];

    @Input() week: any = [];

  constructor() {}

}
