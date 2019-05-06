import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css']
})
export class CityWeatherComponent implements OnInit {
  condition: string;
  currentTemp: number;
  maxTemp: number;
  minTemp: number;
  name: string;

  constructor(public weatherService: WeatherService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
    if(!this.name){
      this.name = 'Paris';
    }
  }

  ngOnInit() {
    this.loadWeather();
  }

  loadWeather() {
    this.condition = this.weatherService.getWeatherState(this.name);
    this.currentTemp = this.weatherService.getCurrentTemp(this.name);
    this.minTemp = this.weatherService.getMinTemp(this.name);
    this.maxTemp = this.weatherService.getMaxTemp(this.name);
  }

  updateName(name: string) {
    this.name = name;
    this.loadWeather();
  }
}
