import { Routes } from '@angular/router';

import { EmptyWeatherdetailsComponent } from './components/empty-weatherdetails/empty-weatherdetails.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherDetailsComponent } from './components/weather/weather-details/weather-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: EmptyWeatherdetailsComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'weather/details/:id', component: WeatherDetailsComponent },
  { path: '**', redirectTo: '/home' },
];
