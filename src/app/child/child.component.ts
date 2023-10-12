import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnDestroy,OnChanges,DoCheck,AfterContentInit,AfterContentChecked {
  interval:any;
  counter  = 0;
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

}
