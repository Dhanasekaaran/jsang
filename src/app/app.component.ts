import { Component } from '@angular/core';
import { dataService } from './services/datashare.service';

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
  people = [{name:'siva',gender:'M'},{name:'Meena',gender:'F'},{name:'vinayaga',gender:'M'},{name:'muruga',gender:'M'}];
  languages = ['Tamil','malayalam','kannada','hindi','telugu','english'];
  userlist = [{name:'python',rollno:123,gender:'F'},{name:'Javascript',rollno:456,gender:'M'},{name:'c++',rollno:789,gender:'F'},{name:'php',rollno:999}]
  msg = "This is content <script></script> area";
  constructor(public dataserv : dataService) {
    
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
