import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';

@NgModule({
  declarations: [
    AppComponent,
    NgforComponent,
    NgifComponent,
    NgswitchComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
