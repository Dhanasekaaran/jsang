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

  constructor(public dataserv : dataService) {
    
  }

  increment() {
    this.dataserv.count++;
  }
}
