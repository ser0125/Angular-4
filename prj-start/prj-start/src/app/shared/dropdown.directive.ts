import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropDown]'
})
export class DropDownDirective{
@HostBinding('class.open') private isClicked: boolean =false; 
@HostListener('click') onclick(){
    this.isClicked = !this.isClicked;
}
}