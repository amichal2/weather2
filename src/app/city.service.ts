import { Injectable }     from '@angular/core';

import { City }           from './city';

@Injectable()
export class CityService {

    getCities(): City[] {
        return [
          {id: 11, name: 'London5'},
          {id: 12, name: 'Hong Kong6'}
        ]
    }
}
