import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title' //ชื่อที่เรียกใช้ pipe
})
export class TitlePipe implements PipeTransform {

  transform(value: any, titleText: string): string {
    return titleText + ": " + value;
  } //เรียกทุกครั้งที่มีค่าเปลี่ยน

}
