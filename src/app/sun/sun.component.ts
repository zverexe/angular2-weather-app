import {Component, Input} from '@angular/core';
import { WeatherItem } from '../weather';

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