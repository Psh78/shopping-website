import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'tileCase'
})

export class TileCasePipe implements PipeTransform {

    transform(value: string, ...args: any[]) : string {
        value = value[0].toUpperCase() + value.slice(1, value.length);
        console.log(value);
        return value;
    }
}