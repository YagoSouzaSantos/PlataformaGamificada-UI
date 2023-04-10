import { Directive, ElementRef, HostListener, Input, Renderer, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDarkenOnHover]'
})
export class DarkenOnHoverDirective {

    @Input() brigthness = '70%'

    constructor(
        private el: ElementRef,
        private render: Renderer2
    ) { }

    @HostListener('mouseover')
    darkenOn() {
         this.render.setStyle(this.el.nativeElement,'filter',`brightness(${this.brigthness})`);
    }

    @HostListener('mouseleave') 
    darkenOff() {
        this.render.setStyle(this.el.nativeElement,'filter','brightness(99%)')
        
    }
}