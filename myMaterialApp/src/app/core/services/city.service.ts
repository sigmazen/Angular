import { Injectable } from '@angular/core';
import { City } from '../interfaces/city';
import { CITIES } from '../../mocks/cities.mock';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor() { }

   getCities(): Array<City> {
    return CITIES
 }

}