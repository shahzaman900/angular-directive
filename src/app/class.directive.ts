import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[appClass]',
})
export class ClassDirective {
    
    // attribute Directive


    // constructor(public element: ElementRef) {
    //     this.element.nativeElement.style.backgroundColor = 'orange';
    // }

    // constructor(public element: ElementRef) {}
    // @Input('appClass') set backgroundColor(color: string) {
    //     this.element.nativeElement.style.backgroundColor = color;
    // }

    constructor(public element: ElementRef) {}
    @Input('appClass') set className(classObj: any) {
        for (let key in classObj) {
            if (classObj[key]) {
                this.element.nativeElement.classList.add(key);
            } else {
                this.element.nativeElement.classList.remove(key);
            }
        }
    }
}
