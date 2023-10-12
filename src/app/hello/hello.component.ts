import { Component,EventEmitter,Input,OnInit,Output } from '@angular/core';
import { dataService } from '../services/datashare.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
 
})
export class HelloComponent implements OnInit {
 @Input() adata = '';
  @Output() cmsg  = new EventEmitter<any>;
  routeval:any;
  parentAge:any;
  parentName:any;

constructor(public dataServ : dataService,private router:ActivatedRoute) {
  
}
  ngOnInit(): void {
    this.routeval = this.router.snapshot.params['val'];
    this.parentAge = this.dataServ.getParentAge();
    this.parentName = this.dataServ.getParentName();
  }

sendData(event:any) {
  this.cmsg.emit(event.target.value)
}
}
