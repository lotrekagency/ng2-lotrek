import {Directive, ElementRef, Input} from '@angular/core';
@Directive({
    selector: '[focusMe]'
})
export class FocusMe {
  constructor(el: ElementRef) {
    setTimeout(() => {
      el.nativeElement.focus();
    });
  }
}