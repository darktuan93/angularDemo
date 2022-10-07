import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sharedpipe'
})
export class SharedpipePipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    console.log(value.length)
    if (value.length > 5){ // Điều kiện cho giá trị nhận vào
      return 'Xin chào các bạn ' // Trả về kết quả cho sharedpipe
    }

  }

}
