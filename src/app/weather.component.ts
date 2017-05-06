import { Component, OnInit }      from '@angular/core';
import { NgForm }                 from '@angular/forms';

import { City }                   from './city';
import { CityService }            from './city.service';
import { WeatherObject }          from './weather';
import { WeatherService }         from './weather.service';

@Component({
  moduleId: module.id,
  templateUrl: './weather.component.html',
  styleUrls: [ './weather.component.css' ],
  providers: [
    CityService,
    WeatherService    
  ]
})
export class WeatherComponent implements OnInit {

    cities: City[];
    weatherObject: WeatherObject;
    errorMessage: string;
    formSubmitted: boolean = false;

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
        console.log('submitted form, value: ' + form.value.city);
        this.weatherService.getWeather(form.value.city).subscribe(
                        response => this.weatherObject = response,
                        error => this.errorMessage = <any>error);
        this.formSubmitted = true;
    }

    clearForm(form: NgForm) {
        this.formSubmitted = false;
        form.resetForm();
    }
}
