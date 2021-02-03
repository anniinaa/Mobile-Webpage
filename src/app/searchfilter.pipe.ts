import { Phone } from './phones';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(Phones: Phone[], searchValue: string): Phone[] {
    if (!Phones || !searchValue){
      return Phones;
    }
    return Phones.filter(phone => 
      phone.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
  }

}
