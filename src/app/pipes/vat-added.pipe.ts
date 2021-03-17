import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  transform(value: number, rate: number): number { // ilk bizim değerimiz, ikinci gönderdiğimiz parametre
    return value + (value * rate / 100);
  }



}
