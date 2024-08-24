import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

import { City } from '../../core/interfaces/city';
import { CityService } from '../../core/services/city.service';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    WeatherDetailsComponent,
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  cities: Array<City> = [];
  cityId: number;

  constructor(private cityService: CityService) {
    this.cityId = -1;
  }

  ngOnInit() {
    //Fetch the cities from the service and store them in the cities array
    this.cities = this.cityService.getCities();
  }

  onSelectCity(index: number): void {
    //Set the selected city index after the user clicks on a city
    this.cityId = index;
  }
}
