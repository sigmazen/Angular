//Lesson01 https://2muchcoffee.com/blog/creating-basic-angular-application-in-10-minutes-part-1/
//Lesson02 https://2muchcoffee.com/blog/creating-basic-angular-application-in-10-minutes-part-2/

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CalendarComponent } from './components/calendar/calendar.component';

import { WeatherComponent } from './components/weather/weather.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    CalendarComponent,
    WeatherComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'myMaterialApp';
}
