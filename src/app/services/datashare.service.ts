import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'  
})

export class dataService {
    count = 0;
    parentAge: number = 0;
    parentName : string = '';
    constructor() {
        
    }

    getParentAge() {
      return this.parentAge;
    }

    getParentName() {
      return this.parentName;
    }

    setParentAge(age:number) {
      this.parentAge = age;
    }

    setParentName(name:string){
      this.parentName = name;
    }
}