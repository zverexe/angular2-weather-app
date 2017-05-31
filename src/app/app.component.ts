import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'app works!';

   weatherDesc: string;

  background(weather){
  		return this.weatherDesc = weather;
  	}
}
