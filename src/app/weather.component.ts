import { Component, OnInit }      from '@angular/core';
import { NgForm }                 from '@angular/forms';

import { City }                   from './city';
import { CityService }            from './city.service';
import { WeatherService }         from './weather.service';

@Component({
  moduleId: module.id,
  templateUrl: './weather.component.html',
  providers: [
    CityService,
    WeatherService    
  ]
})
export class WeatherComponent implements OnInit {

    cities: City[];
    
    constructor(
      private cityService: CityService,
      private weatherService: WeatherService) {}

    ngOnInit(): void {
        this.getCities();
    }

    getCities(): void {
        this.cities = this.cityService.getCities();
    }

    onSubmit(form: NgForm): void {
        console.log('submitted form, values: ' + form.value.surname + ' ' + form.value.city);
    }
}
