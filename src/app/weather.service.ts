import { Injectable }                       from '@angular/core';
import { Http, Response, URLSearchParams }  from '@angular/http';

import { Observable }                       from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { WeatherObject }                    from './weather';

@Injectable()
export class WeatherService {

    constructor(private http: Http) {}

    getWeather(cityId: string): Observable<WeatherObject> {
        let params = new URLSearchParams();
        params.set('APPID', '1ef31f5f6a7e9579e2f0a695fa307469');
        params.set('id', cityId);

        return this.http
               .get('http://api.openweathermap.org/data/2.5/weather', {search: params})
               //.get('app/weather-data.json')
               .map(response => response.json() as WeatherObject)
               .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
