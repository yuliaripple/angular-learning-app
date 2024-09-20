import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  standalone: true,
  name: 'threeDots',
})

export class ThreeDotsPipe implements PipeTransform {
  transform(value: string): string {
    return value.length > 15 ? value.slice(0, 50).concat('...') : value
  }
}