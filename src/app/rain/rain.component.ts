import {Component, Input} from '@angular/core';
import { WeatherItem } from '../weather';

@Component({
  selector: 'app-rain',
  templateUrl: './rain.component.html',
  styleUrls: ['./rain.component.scss']
})
export class RainComponent {

  @Input() currentCity: WeatherItem;

  @Input() weatherItems: WeatherItem[];

  @Input() week: any = [];

  constructor() {}
}