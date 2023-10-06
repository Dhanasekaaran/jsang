import { Component,EventEmitter,Input,Output } from '@angular/core';
import { dataService } from '../services/datashare.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  providers: [dataService]
})
export class HelloComponent {
 @Input() adata = '';
  @Output() cmsg  = new EventEmitter<any>;

constructor(public dataServ : dataService) {

}

sendData(event:any) {
  this.cmsg.emit(event.target.value)
}
}
