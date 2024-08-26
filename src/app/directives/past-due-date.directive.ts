import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appPastDueDate]',
  standalone: true,
})
export class PastDueDateDirective implements OnInit {
  @Input('appPastDueDate') data: any;

  constructor(private eleRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.data.date < new Date() && this.data.status !== 'Completed') {
      this.renderer.setStyle(
        this.eleRef.nativeElement,
        'backgroundColor',
        '#ffdddd'
      );
    } else if (this.data.status === 'Completed') {
      this.renderer.setStyle(
        this.eleRef.nativeElement,
        'background',
        '#00d090'
      );
    }
  }
}
