import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBgChanger]'
})
export class BgChangerDirective {
  @HostBinding('style.background-color') color = 'white';
  @HostBinding('style.cursor') cursor = 'pointer';

  @HostListener('mouseenter', ['$event'])
  enter(event: Event) {
    this.color = '#f5f5f5';
  }
  @HostListener('mouseleave', ['$event'])
  leave(event: Event) {
    this.color = 'white';
  }
}
