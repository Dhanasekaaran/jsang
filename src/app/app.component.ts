import { Component, DoCheck, OnChanges, OnInit, ViewChild } from '@angular/core';
import { dataService } from './services/datashare.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, combineLatest, forkJoin, merge, from, fromEvent, interval,of,concat} from 'rxjs';
import { concatMap, debounceTime, map,mapTo,mergeMap,scan,switchMap,take,takeUntil,tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[dataService]
  
})
export class AppComponent implements OnInit,OnChanges,DoCheck{
  title = 'jsang';
  name = "Angular"; 
  class1 = "classname";
  htmldata = 'Gopi';
  showVal = false;
  appdata = '';
  childVal = '';
  today = new Date();
  num = 1746.78;
  amount = 70000.90;
  percen = 2635.7;
  god = 'muruga';
  godz = '';
  obj = { god : 'muruga', house:'six'};
  ary = [9,8,7,6];
  cutom = 'Angular';
  obv:any;
  routeVal:any;
  pname:any;
  page:any;
  childcp = true;
  onchnagecycle:any;
  uname:any;
  email:any;
  terms:any;
  fobs:any;
  fobs2:any;
  prome:any;
  myReact: FormGroup | any;
  people = [{name:'siva',gender:'M'},{name:'Meena',gender:'F'},{name:'vinayaga',gender:'M'},{name:'muruga',gender:'M'}];
  languages = ['Tamil','malayalam','kannada','hindi','telugu','english'];
  userlist = [{name:'python',rollno:123,gender:'F'},{name:'Javascript',rollno:456,gender:'M'},{name:'c++',rollno:789,gender:'F'},{name:'php',rollno:999}]
  msg = "This is content <script></script> area";
  @ViewChild('temp',{static:true}) tempVar: any;
  vowel = [
   { letter: 'a', count: 0 },
   { letter: 'e', count: 0 },
   { letter: 'i', count: 0 },
   { letter: 'o', count: 0 },
   { letter: 'u', count: 0 }
  ]

  member = [
    {id:1, name:'poori'},
    {id:2, name:'chappati'},
    {id:3, name:'idly'},
    {id:4, name:'dosa'},
    {id:5, name:'pongal'}
  ];

  number1 = 77;

 // jsonData = this.http.get('https://dummyjson.com/products/2');

  jsonData = new Promise((resolve,reject) => {
    this.http.get('https://dummyjson.com/products/2').subscribe(x => resolve(x))
  })

  jsonData1 = new Observable((subcriber) => {
    this.http.get('https://dummyjson.com/products/2').subscribe(y => subcriber.next(y))
  })
  date$ = interval(1000).pipe(
    map((x:any) => new Date()),
    take(5)
  )

  constructor(public dataserv : dataService,private http: HttpClient,private route:ActivatedRoute,private router:Router) {
    //console.log('ithu parent consructor');
    const obs$ = new Observable((subscriber) => {
      subscriber.next(1);
      subscriber.complete();
      subscriber.next(2)
    });

    obs$.subscribe(x1 => {
      this.obv = x1;
    },error => {
      console.log('err' + error)
    }, //() => console.log('Observer got a complete notification')
    );

   
  }
  
  ngOnInit(): void {
    //console.log('ithu parent onInit');
    this.tempVar.nativeElement.focus();
    this.myReact = new FormGroup({
      'runame' : new FormControl('',Validators.required),
      'remail' : new FormControl('',[Validators.required,Validators.email]),
      'rterm' : new FormControl(),
    })

    //this.forkjoin();
    //this.forkjoin1();
    // this.getallforks().subscribe((result) => {
    //   console.log(result);
    //   this.fobs = result[0];
    //   this.fobs2 = result[1];
    // })
    this.dataserv.getall().subscribe((result) => {
     // console.log(result);
      this.fobs = result[0];
      this.fobs2 = result[1];
    })

    const obsRx = from([1,2,3]);
    obsRx.subscribe({
      next(result) {
       // console.log('from obs',result)
      },error(err){
       // console.log('error',err)
      },complete() {
      //  console.log('comnplete')
      }
    })

    const el = document.getElementById('ptag')!;

    // Create an Observable that will publish mouse movements
    const mouseMoves = fromEvent(document.getElementById('ptag')!, 'click');

    mouseMoves.subscribe((res) =>{
     // console.log('Number of times',res)
    })


    const int = interval(1000).pipe(map(x => x +' '+ 'seconds'),take(5));

    int.subscribe(res => {
     // console.log(res)
    })

    const obe = of(4,8,12);

    obe.subscribe((res) => {
     // console.log(res)
    })

    //combineLatest 

    const t1 = interval(1000).pipe(map(y1 => y1+' '+'seconds'));

    const t2 = interval(5000).pipe(map(y2 => y2+' '+ 'seconds'));

    const t3 = combineLatest(t1).subscribe((res) => {
      //console.log(res)
    })

    //conact

    const a1 = interval(6000).pipe
    (map(aa1 => aa1 + ' concat'),take(2));

    const a2 = interval(7000).pipe(map(d => d + ' 2 concat'),take(3))

    const con = concat(a1,a2).subscribe((res:any) => {
      //console.log(res)
    })

    //forkjoin

    const f1 =interval(4000).pipe(map(x  => x),take(2));

    const f2 = interval(5000).pipe(map(x  => x),take(2));

    const fk = forkJoin(f1,f2).subscribe((res:any) => {
    //  console.log('Fork Join', res)
    })

    //merge

     const m11 =interval(4000).pipe(map(x  => x),take(2));

    const m2 = interval(500).pipe(map(x  => x  + 2),take(2));

    const mer = merge(f1,f2).subscribe((res:any) => {
     // console.log('merge ', res)
    })

    //debounceTime || bufferTime

    const d1 = fromEvent(document.getElementById('debounce')!,'click');

    const d2 = d1.pipe(debounceTime(2000)).subscribe((res) => {
     // console.log('Debounce ',res)
    })
    
    //concatMap,merge,switch

    const w1 = of('a','b','c')
    const w2 = w1.pipe(switchMap(cm => of(0,1,2).pipe(take(3),map(x => cm + x))))
    w2.subscribe((final) => {
      console.log('Merge ',final)
    })

    //scan
    const click = fromEvent(document.getElementById('scan')!,'click');
    const one = click.pipe(mapTo(1));
    const seed = 0;
    const ree = one.pipe(scan((acc,cur) =>  acc + cur,seed ));
    ree.subscribe((res:any) => {
      console.log('scan ',res)
    })

    //takeUntil

    const e1 = fromEvent(document.getElementById('until')!,'click');
    const e2 = interval(5000);
    const e3 = e2.pipe(takeUntil(e1));
    e3.subscribe((red:any) => {
      console.log('Take until ',red)
    })

  }

  increment() {
    this.dataserv.count++;
  }

  update(event:any) {
    this.htmldata = event.target.value;
  }

  getChild(e:any) {
    this.childVal = e;
  }

  add(val:any) {
    this.people =  [...this.people,{name:val,gender:'M'}];
  }

  hello(randnum:any) {
    this.router.navigateByUrl('hello/'+randnum);
  }

  serviceFn() {
    this.dataserv.setParentAge(this.page);
    this.dataserv.setParentName(this.pname);
    this.router.navigate(['hello']);
  }

  show() {
    this.childcp = !this.childcp;
  }

  ngOnChanges() {
   // console.log('ithu parent onchnages');
  }

  ngDoCheck(): void {
  //  console.log('ithu parent DoCheck');
  }

  fsubmit(myForm:any) {
    console.log(myForm);
    console.log(myForm.controls.uname.value)
    myForm.reset();
  }

  rReact1() {
    this.myReact.reset();
  }

  getforms() {
    console.log(this.myReact);
    this.myReact.setValue({
      'runame' : 'Angular Web',
      'remail' : 'test@gmail.com',
      'rterm' : true
    })
    // this.myReact.patchValue({
    //   'runame' : 'Angular web tech',
    //   'rterm' : true
    // })
  }

  gettempval(tmval:any,temp1:any) {
    console.log(tmval);
    console.log(temp1.innerText)
  }

  analyse(word:any){
    let aCount = 0;
    let eCount = 0;
    let iCount = 0;
    let oCount = 0;
    let uCount = 0;
   console.log(word);
    for(let wor of word){
      console.log(word);
      if(wor === 'a'){
        aCount++;
      }
      if(wor === 'e'){
        eCount++;
      }
      if(wor === 'i'){
        iCount++;
      }
      if(wor === 'o'){
        oCount++;
      }
      if(wor === 'u'){
        uCount++;
      }
    }
console.log(aCount);
    this.vowel = [
      {letter:'a',count:aCount},
      {letter:'e',count:eCount},
      {letter:'i',count:iCount},
      {letter:'o',count:oCount},
      {letter:'u',count:uCount}
    ]
  }

  refresh() {
    this.member = [
      {id:1, name:'poori'},
      {id:2, name:'chappati'},
      {id:4, name:'parota'},
      {id:5, name:'dosa'},
      {id:6, name:'meal'}
    ];
  }

  trackMem(index:any,item:any) {
    //return index;
    return item.id;
  }

  // token = "34343434334er334";
  intercep(){
   /* const headers = new HttpHeaders({
      'Authoirisation' : `Bearer ${this.token}` 
    })
    this.http.get('https://jsonplaceholder.typicode.com/albums',{headers : headers}).subscribe((res) => {
      console.log(res);
    })*/
    // this.http.get('https://jsonplaceholder.typicode.com/albummys').subscribe((res) => {
    //   console.log(res);
    // })

  }
  forkjoin() {
    return new Observable<any>((observer) => {
      setTimeout(() => {
        observer.next('First Fork')
      },5000)      
    }).subscribe((fo) => {
      this.fobs = fo
      
    })
  }



  forkjoin1() {
    return new Observable<any>((observer) => {
      setTimeout(() => {
        observer.next('second Fork')
      },2000)      
    }).subscribe((foe) => {
      this.fobs2 = foe
    })
  }

  getallforks() {
  
  }

  prom1(){
  this.prome= this.http.get('https://dummyjson.com/products/2')
  }
  
}
