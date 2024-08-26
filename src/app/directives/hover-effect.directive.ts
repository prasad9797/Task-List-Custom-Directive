import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]',
  standalone: true,
})
export class HoverEffectDirective {
  constructor(private eleRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.changeOnHover(true);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.changeOnHover(false);
  }

  private changeOnHover(setStyle: boolean) {
    if (setStyle) {
      this.renderer.setStyle(
        this.eleRef.nativeElement,
        'box-shadow',
        '0 4px 2px rgba(122,47,177,0.9'
      );
      this.renderer.setStyle(
        this.eleRef.nativeElement,
        'transform',
        'translateY(-2px)'
      );
      this.renderer.setStyle(
        this.eleRef.nativeElement,
        'transition',
        'all 0.3s ease'
      );
    } else {
      this.renderer.removeStyle(this.eleRef.nativeElement, 'box-shadow');
      this.renderer.removeStyle(this.eleRef.nativeElement, 'transform');
    }
  }
}
