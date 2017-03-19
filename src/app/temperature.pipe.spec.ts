import { TemperaturePipe }   from './temperature.pipe';

describe('temperature pipe tests', () => {

    const temperaturePipe: TemperaturePipe = new TemperaturePipe();
    const temperatureKelvin: number = 273.15;

    it('Kelvin to Fahrenheit', () =>
        expect(temperaturePipe.transform(temperatureKelvin, 'fah')).toBe(32));

    it('Kelvin to Celsius', () =>
        expect(temperaturePipe.transform(temperatureKelvin, 'cel')).toBe(0));
});
