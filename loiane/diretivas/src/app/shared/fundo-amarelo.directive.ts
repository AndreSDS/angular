import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {



  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer
    ) {
    //this.elementRef.nativeElement.style.backgroundColor = 'yellow';
      this._renderer.setElementStyle(
        this._elementRef.nativeElement,
        'background-color',
        'yellow'
        );
      this._renderer.setElementStyle(
          this._elementRef.nativeElement,
          'font-size',
          '10px'
          );
  }

}
