import { Component, OnInit} from '@angular/core';
import { City } from '../../core/interfaces/city';
import { CityService } from '../../core/services/city.service';
import { CommonModule } from '@angular/common';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';


@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [ CommonModule, WeatherDetailsComponent ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})


export class WeatherComponent implements OnInit {
  cities: Array<City> = [];
  selectedCity: number;
//  myCity: City;

 constructor(private cityService: CityService) { 
    this.selectedCity = -1;  
//    this.myCity = { name: '', forecast: { conditions: '', wind: { speed: 0, direction: '' }, temperature: { day: { min: 0, max: 0 }, night: { min: 0, max: 0 } }
    //  , myWeather: () => 0 
//  } }; 
}

  ngOnInit() {
    //Fetch the cities from the service and store them in the cities array
    this.cities = this.cityService.getCities();
  }

  onSelectCity(index: number): void {
    //Set the selected city index after the user clicks on a city
    this.selectedCity = index;
  }

}
