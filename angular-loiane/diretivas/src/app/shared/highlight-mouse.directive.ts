import { Directive, HostListener, HostBinding/*, ElementRef, Renderer*/ } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  constructor(
    // private _elementRef: ElementRef,
    // private _renderer: Renderer
  ) { }

  @HostListener('mouseenter') onMouseOver() {
    /* this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color', 'yellow'
    );*/

    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    /* this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color', 'white'
    ); */
    this.backgroundColor = 'white';
  }

  // Forma simplificada
  // @HostBinding('style.backgroundColor') backgroundColor: string;

  // Forma com getter e setter (pode manipular antes de atribuir)
  private backgroundColor: string;

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }
}
