import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'append'
})

export class Appendpipe implements PipeTransform {
    transform(value:any, appendVal : any) {
        console.log(value);
        return value + appendVal
    }
}

@Pipe({
    name : 'filter'
})

export class Filterpipe implements PipeTransform {
    transform(value:any, field:any, filterVal:any) {
       if(value && value.length > 0){
        return value.filter((x:any) => 
               x[field] == filterVal 
            )
        } else {
            return [];
        }
    }
}