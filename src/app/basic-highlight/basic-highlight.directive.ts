import { Directive, ElementRef, OnInit, HostListener } from '@angular/core';
import { NgModuleResolver } from '@angular/compiler';

@Directive({ selector: '[appBasicHighlight]' })
export class BasicHighlightDirective implements OnInit {
  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
  constructor(private elementRef: ElementRef) {}
  @HostListener('mouseenter') mouseover() {
    this.elementRef.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseleave') mouseleave() {
    this.elementRef.nativeElement.style.backgroundColor = 'transparent';
  }
}
