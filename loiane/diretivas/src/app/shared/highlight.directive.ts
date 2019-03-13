import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor() { }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @Input() defaultColor = 'white';
  @Input() highlightColor = 'red';

  @HostListener('mouseenter') onMouseOver() {
      this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
      this.backgroundColor = this.defaultColor;
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
