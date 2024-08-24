import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Forecast } from '../../../core/interfaces/forecast';
import { CityService } from '../../../core/services/city.service';

@Component({
  selector: 'app-weather-details',
  standalone: true,
  imports: [],
  templateUrl: './weather-details.component.html',
  styleUrl: './weather-details.component.scss',
})
export class WeatherDetailsComponent {
  forecast: Forecast;

  constructor(private route: ActivatedRoute, private cityService: CityService) {
    this.forecast = {
      cityId: -1,
      conditions: '',
      wind: { speed: 0, direction: '' },
      temperature: { day: { min: 0, max: 0 }, night: { min: 0, max: 0 } },
    };
  }

  ngOnInit() {
    this.route.params.subscribe((params) =>
      this.initializeForecast(+params['id'])
    );
  }

  initializeForecast(id: number) {
    this.forecast = this.cityService.getForecast(id);
  }
}
