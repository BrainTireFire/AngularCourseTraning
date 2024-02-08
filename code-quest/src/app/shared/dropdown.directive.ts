import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  constructor(private elRef: ElementRef) {}

  //   @HostListener('click') toggleOpen(eventData: Event) {
  //     this.isOpen = !this.isOpen;
  //   }

  // If you want that a dropdown can also be closed by a click anywhere outside
  // (which also means that a click on one dropdown closes any other one, btw.)
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }
}
