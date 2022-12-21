import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, maxLength: number = 20): string {
    console.log(maxLength);
    if (value.length > 10) {
      let slicedString: string = value.slice(0, maxLength);
      let truncatedString: string = slicedString + '...';
      return truncatedString;
    }
    return value;
  }
}
