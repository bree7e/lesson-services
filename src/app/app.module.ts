import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { StudentService } from './student.service';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
  ],
  imports: [
    BrowserModule
  ],
  // providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
