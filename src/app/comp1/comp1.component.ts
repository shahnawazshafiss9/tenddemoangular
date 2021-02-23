import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DesignutilityService } from '../appService/designutility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit, OnChanges {

  constructor(private _designServices: DesignutilityService) {
    this._designServices.userName.subscribe(uname => {
      this.userName = uname
    });
   }
   ngOnChanges(changes: SimpleChanges): void {
      console.log('on changes called');
   }

  ngOnInit(): void {
  }
  userName:string;
  @Input() myValue = "mysql";

  updateUserName(uname){
    // this.userName = uname.value;
    this._designServices.userName.next(uname.value);
  }

}
