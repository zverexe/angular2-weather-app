import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdCardModule, MdInputModule} from '@angular/material';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { WeatherListComponent } from './weather-list/weather-list.component';

import { WeatherService } from './service/weather.service';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { CloudsComponent } from './clouds/clouds.component';
import { SunComponent } from './sun/sun.component';
import { RainComponent } from './rain/rain.component';
import { ThunderstormComponent } from './thunderstorm/thunderstorm.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherListComponent,
    WeatherSearchComponent,
    CloudsComponent,
    SunComponent,
    RainComponent,
    ThunderstormComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    NgbModule.forRoot()
  ],

  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
