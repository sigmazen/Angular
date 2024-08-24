import { Component, Input } from '@angular/core';
import { Forecast } from '../../../core/interfaces/forecast';

@Component({
  selector: 'app-weather-details',
  standalone: true,
  imports: [],
  templateUrl: './weather-details.component.html',
  styleUrl: './weather-details.component.scss'
})


export class WeatherDetailsComponent {
  @Input() 
  forecast: Forecast = { conditions: '', wind: { speed: 0, direction: '' }, temperature: { day: { min: 0, max: 0 }, night: { min: 0, max: 0 } } };
}

