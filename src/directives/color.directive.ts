import { Directive, ElementRef, HostListener, Renderer2, Input, HostBinding } from "@angular/core";

@Directive({
    selector:'[appColor]',
    host : {
        '(click)' : 'applylogic()'
    }
})

export class ColorDirective {
    @Input() number = 0;
    @Input() divide = 1;
    @Input() color:string = '';
    constructor(private element: ElementRef,private render:Renderer2,private e1:ElementRef){
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
    applylogic() {
        if(this.number % this.divide === 0){
            this.e1.nativeElement.style.color = 'yellow';
        }else {
            this.e1.nativeElement.style.color = 'orange';
        }
    }
}