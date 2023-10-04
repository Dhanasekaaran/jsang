import { Component } from '@angular/core';
import { dataService } from '../services/datashare.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  providers: [dataService]
})
export class HelloComponent {
constructor(public dataServ : dataService) {

}
}
