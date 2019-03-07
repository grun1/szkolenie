import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appJumbotron]'
})
export class JumbotronDirective {

  constructor(
    private $element: ElementRef
  ) { }

  ngOnInit(){
    this.$element.nativeElement.classList.add("jumbotron");
  }

}
