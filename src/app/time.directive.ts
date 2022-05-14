import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
    selector: '[appTime]',
})
export class TimeDirective {

//  custom Structural directive

    constructor(
        private viewContainer: ViewContainerRef,
        private templete: TemplateRef<any>
    ) {}

    @Input('appTime') set render(time: number) {
        this.viewContainer.clear();

        for (let i = 0; i < time; i++) {
            this.viewContainer.createEmbeddedView(this.templete, {
              index: i,
            });
        }
    }
}
