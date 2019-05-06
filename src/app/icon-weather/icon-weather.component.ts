import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'icon-weather',
  templateUrl: './icon-weather.component.html',
  styleUrls: ['./icon-weather.component.css']
})
export class IconWeatherComponent implements OnInit {

  @Input() size: "petit";
  @Input() condition: string;
  
  ngOnInit() {
  }

}
