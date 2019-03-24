import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let values = value.split(' ');
    let result = '';

    for(const v of values){
      result += this.capitalize(v) + ' ';
    }
    return result;
  }

  capitalize(value: string){
    return value.substr(0,1).toUpperCase() +
      value.substr(1).toLocaleLowerCase();
  }

}
