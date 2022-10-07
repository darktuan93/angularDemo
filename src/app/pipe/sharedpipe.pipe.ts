import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sharedpipe'
})
export class SharedpipePipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    let testLength = value.length
    console.log(value.length)
    if (value.length > 5){
      return 'Xin chào các bạn '
    }

  }

}
