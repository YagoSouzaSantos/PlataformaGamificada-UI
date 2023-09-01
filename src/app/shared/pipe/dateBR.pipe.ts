import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateBR'
})
export class DateBRPipe implements PipeTransform {
  transform(value: any): any {
    if (value) {
      const datePipe: DatePipe = new DatePipe('en-US');
      const formattedDate = datePipe.transform(value, 'dd/MM/yyyy');
      return formattedDate;
    }
    return value;
  }
}


