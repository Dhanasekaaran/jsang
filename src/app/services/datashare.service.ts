import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable,ReplaySubject,Subject,forkJoin } from 'rxjs'; 

@Injectable({
  providedIn:'root'  
})

export class dataService {
    count = 0;
    parentAge: number = 0;
    parentName : string = '';
    sub:Subject<any>;
    private subBeh:BehaviorSubject<any>;
    subObs:Observable<any>;
    private subRep : ReplaySubject<any>;
    repObs:Observable<any>;
    constructor() {
       this.sub = new Subject();
       this.subBeh = new BehaviorSubject<any>(9000);
       this.subObs = this.subBeh.asObservable();
       this.subRep = new ReplaySubject<any>(3);
       this.repObs = this.subRep.asObservable();
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

    subdata() {
        this.sub.next(Math.random());
    }

    behdata() {
      this.subBeh.next(Math.random());
    }
    repdata() {
      this.subRep.next(Math.random());
    }
   
}