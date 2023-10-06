import { Directive, ElementRef, HostListener, Renderer2, Input, HostBinding } from "@angular/core";

@Directive({
    selector:'[appColor]'
})

export class ColorDirective {
    @Input() color:string = '';
    constructor(private element: ElementRef,private render:Renderer2){
        //this.element.nativeElement.style.backgroundColor = 'red';
    }

    //@HostBinding('style.color') color1 = 'orange';
    @HostBinding('class') color1 = 'spanrow';

    @HostListener('mouseenter') 
    OnmouseEnter(){
        this.colorChange(this.color);
    } 

    @HostListener('mouseleave') 
    Onmouseleave() {
        this.colorChange('white');
    }

    colorChange(color:string) {
        this.render.setStyle(this.element.nativeElement,'backgroundColor',color);
    }
}