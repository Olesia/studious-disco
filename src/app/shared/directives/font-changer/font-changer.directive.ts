import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appFontChanger]'
})
export class FontChangerDirective {
  @Input('appFontChanger') size: number;
  constructor(private el: ElementRef, private render: Renderer2) { }

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    this.size ++;
    // this.render.setStyle(this.el.nativeElement, 'font-size', this.size.toString() + 'px');
    this.render.setStyle(this.el.nativeElement, 'font-size', `${this.size}px`);
  }

}
