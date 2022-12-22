import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, maxLength: number = 19): string {
    let valueLengh: number = value.split(' ').join('').length;

    if (valueLengh > maxLength) {
      let slicedString: string = value.slice(0, maxLength);
      let truncatedString: string = slicedString + '...';
      return truncatedString;
    }
    return value;
  }
}
