import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBgColor]' //เป็น select element
})
export class BgColorDirective {

@Input('appBgColor') color: string;

//change background color
  constructor(private element: ElementRef) {
    // element.nativeElement.style.backgroundColor = "pink";
    
   }

   ngOnChanges(){
     
    this.element.nativeElement.style.backgroundColor = this.color;
   }
}
