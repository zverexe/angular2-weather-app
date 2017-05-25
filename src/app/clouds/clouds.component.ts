import {Component, Input} from '@angular/core';
import { WeatherItem } from '../weather';


@Component({
  selector: 'app-clouds',
  templateUrl: './clouds.component.html',
  styleUrls: ['./clouds.component.scss']
})
export class CloudsComponent {
  @Input() currentCity: WeatherItem;

  @Input() weatherItems: WeatherItem[];

  @Input() week: any = [];

  constructor() {}
}
