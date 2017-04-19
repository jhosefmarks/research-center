import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray'
})
export class FiltroArrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let filter;

    if (value.length === 0 || args === undefined) {
      return value;
    }

    filter = args.toLocaleLowerCase();

    return value.filter(v => v.toLocaleLowerCase().includes(filter));
  }

}
