import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'temperature'})
export class TemperaturePipe implements PipeTransform {
    transform(kelvin: number, unit: string): number {
        let result: number = 0;
        if ('fah' === unit) {
            result = 1.8 * (kelvin - 273.15) + 32;
        } else if ('cel' === unit) {
            result = kelvin - 273.15;
        } else {
            console.error('Unknown temperature unit: ' + unit);
        }
        return Math.round(result * 10) / 10
    }
}
