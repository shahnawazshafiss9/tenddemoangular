import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LeptopComponent } from './products/leptop/leptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { TvComponent } from './products/tv/tv.component';
import { WashingMachineComponent } from './products/washing-machine/washing-machine.component';
import { CardComponent } from './card/card.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Card2Component } from './card2/card2.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'products', component: ProductsComponent, children: [
     // { path: '', component: ProductsComponent },
      { path: 'leptop', component: LeptopComponent },
      { path: 'mobile', component: MobileComponent },
      { path: 'tv', component: TvComponent },
      { path: 'washing-machine', component: WashingMachineComponent }
    ]
  },
  { path: 'buyproduct', component: ParentComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NgforComponent,
    NgifComponent,
    NgswitchComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    PageNotFoundComponent,
    LeptopComponent,
    MobileComponent,
    TvComponent,
    WashingMachineComponent,
    CardComponent,
    ParentComponent,
    ChildComponent,
    Card2Component
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
