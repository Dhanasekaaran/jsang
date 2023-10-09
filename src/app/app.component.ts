import { Component } from '@angular/core';
import { dataService } from './services/datashare.service';
import { HttpClient } from '@angular/common/http';
import { Observable, interval} from 'rxjs';
import { map,take } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[dataService]
  
})
export class AppComponent {
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
  people = [{name:'siva',gender:'M'},{name:'Meena',gender:'F'},{name:'vinayaga',gender:'M'},{name:'muruga',gender:'M'}];
  languages = ['Tamil','malayalam','kannada','hindi','telugu','english'];
  userlist = [{name:'python',rollno:123,gender:'F'},{name:'Javascript',rollno:456,gender:'M'},{name:'c++',rollno:789,gender:'F'},{name:'php',rollno:999}]
  msg = "This is content <script></script> area";

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

  constructor(public dataserv : dataService,private http: HttpClient) {
    const obs$ = new Observable((subscriber) => {
      subscriber.next(1);
      subscriber.complete();
      subscriber.next(2)
    });
  
    obs$.subscribe(x1 => {
      console.log(x1);
      this.obv = x1;
    },error => {
      console.log('err' + error)
    }, () => console.log('Observer got a complete notification')
    );
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
}
