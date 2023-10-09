import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { dataService } from './services/datashare.service';
import { FormsModule } from '@angular/forms';
import { ColorDirective } from 'src/directives/color.directive';
import { Appendpipe, Filterpipe } from './pipe/append.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ColorDirective,
    Appendpipe,
    Filterpipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [dataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
