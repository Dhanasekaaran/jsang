import { Component, DoCheck, OnChanges, OnInit, ViewChild } from '@angular/core';
import { dataService } from './services/datashare.service';
import { HttpClient } from '@angular/common/http';
import { Observable, interval} from 'rxjs';
import { map,take } from 'rxjs/operators';
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
}
