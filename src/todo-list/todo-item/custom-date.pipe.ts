import { Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';

@Pipe({
  name: 'customDate',
})
export class CustomDatePipe implements PipeTransform {
  transform(value: number, hours?: boolean): string {
    let date = new Date(0);
    date.setMilliseconds(value);
    let txtFormat = '';
    txtFormat += [date.getDay(), date.getMonth(), date.getFullYear()].join('/');
    if (hours) {
      txtFormat += ' ' + [date.getHours(), date.getMinutes()].join(':');
    }
    return txtFormat;
  }
}
