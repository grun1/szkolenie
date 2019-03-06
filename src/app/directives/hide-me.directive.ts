import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHideMe]'
})
export class HideMeDirective {

  @Input() appHideMe: number = null;

  constructor(
    private $element: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(){
    this.renderer.listen(this.$element.nativeElement,'click' ,() =>{
      setTimeout( ()=> {
        this.$element.nativeElement.remove();
      },this.appHideMe);
    });
  }
}
