import { Injectable }     from '@angular/core';

import { City }           from './city';

@Injectable()
export class CityService {

    getCities(): City[] {
        return [
          {id: 2643743, name: 'London'},
          {id: 1819729, name: 'Hong Kong'}
        ]
    }
}
