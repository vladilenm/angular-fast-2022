import {AfterViewInit, Directive, ElementRef, OnInit} from '@angular/core'

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnInit, AfterViewInit{

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit(): void {
    // this.el.nativeElement.focus()
  }

  ngOnInit(): void {
    this.el.nativeElement.focus()
  }

}
