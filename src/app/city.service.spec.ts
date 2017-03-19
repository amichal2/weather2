import { City }                   from './city';
import { CityService }            from './city.service';

describe('CityService tests', () => {

    const cityService: CityService = new CityService();

    it('number of cities', () =>
        expect(cityService.getCities().length).toBe(2));

    it('London city', () =>
        expect(cityService.getCities()[0].name).toBe('London'));
});
