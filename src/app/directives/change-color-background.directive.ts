import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColorBackground]',
  standalone: true
})
export class ChangeColorBackgroundDirective {

  // constructor(private el: ElementRef) {
  //   this.el.nativeElement.style.backgroundColor = 'blue';
  // }

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.changeColorBackground('magenta', 'italic');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColorBackground('', '');
  }

  private changeColorBackground(color: string, font: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.fontStyle = font;
  }

}
