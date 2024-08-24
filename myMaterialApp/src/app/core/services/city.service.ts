import { Injectable } from '@angular/core';
//Interfaces
import { City } from '../interfaces/city';
import { Forecast } from '../interfaces/forecast';
//Mock Data
import { CITIES } from '../../mocks/cities.mock';
import { FORECASTS } from '../../mocks/forecasts.mock';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor() {}

  getCities(): Array<City> {
    return CITIES as Array<City>;
  }

  getForecast(cityId: number): Forecast {
    return FORECASTS.find((forecast) => forecast.cityId === cityId) as Forecast;
  }
}
