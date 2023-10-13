import { Injectable } from '@angular/core';
import { Observable,forkJoin } from 'rxjs'; 

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

    getall() {
      let  ob = new Observable<any>((sub1) => {
        setTimeout(() => {
          sub1.next(25);
          sub1.complete();
        },5000)
      })
      
      let ob2 = new Observable<any>((sub1) => {
        setTimeout(() => {
          sub1.next(50);
          sub1.complete();
        },2000)
      })
        return forkJoin([ob,ob2])
    }
   
}