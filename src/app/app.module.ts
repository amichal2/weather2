import { NgModule }          from '@angular/core';
import { BrowserModule }     from '@angular/platform-browser';
import { FormsModule }       from '@angular/forms';
import { HttpModule }        from '@angular/http';

import { AppRoutingModule }  from './app-routing.module';

import { AppComponent }      from './app.component';
import { WeatherComponent }  from './weather.component';

import { TemperaturePipe }   from './temperature.pipe';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    WeatherComponent,
    TemperaturePipe
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
