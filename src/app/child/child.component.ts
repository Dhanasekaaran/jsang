import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnDestroy,OnChanges,DoCheck,AfterContentInit,AfterContentChecked {
  interval:any;
  counter  = 0;
  status = 'offline';
  isStatus = false;
  myprom:any;
  myObs:any;
  count = 0;
  data: number[] = [];
  @Input() onchnagecycle:any;

  @ContentChild('content') content:any;
  constructor() {
   // console.log('ithu child constructor');
  }
 
 
  ngOnInit(): void {
   // console.log('ithu child oninit',this.content);
  //  this.interval =  setInterval(() => {
  //     this.counter = this.counter + 1;
  //     console.log(this.counter);
  //   },1000)
  this.getStatus();
  this.myprom.then((res:any)=>{
    console.log(res)
    this.check()
  })
  this.getObs()
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
   // console.log('ithu child ngDestroy',this.content);
  }

  ngOnChanges(changes: SimpleChanges): void {
   // console.log('ithu child Onchanges',this.content);
  }

  ngDoCheck(): void {
   // console.log('ithu child Docheck',this.content);
  }

  ngAfterContentInit() {
   // console.log('ithu child contentInit',this.content);
  }

  ngAfterContentChecked() {
   // console.log('ithu child contentchecked',this.content);
  }

  getStatus(){
    console.log('a');
    this.myprom = new Promise<any>((resolve,reject) => {
      setTimeout(() => {
        this.isStatus = true;
        resolve(this.status);
      console.log('status');
    },3000)
    })
    
  }

  check() {
    console.log('v')
    if(this.isStatus === false){
      this.status = 'offline'
    }else {
      this.status = 'online'
    }
   
   
  }

  getObs(){
    //console.log(this.count++);
     this.myObs = new Observable<any>((myob) => {
      
      setInterval(()=>{
        this.count++;
        this.data.push(this.count);
        myob.next(this.data);
      },1000)
     })
  } 

  getdata() {
    this.myObs.subscribe((rrr:any) => {
      console.log(rrr)
    })
  }

}
