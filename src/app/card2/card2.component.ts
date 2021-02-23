import { Component, OnInit } from '@angular/core';
import { Message } from '../appService/alertMessage.service'
import { DesignutilityService } from '../appService/designutility.service';
@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {

  constructor(private _msgService: DesignutilityService) { }
  leptop = {};
  ngOnInit(){
    // this.leptop = this._msgService.product.name;
    this._msgService.product().subscribe(restData => this.leptop = restData);
  }

  btnAlert() {
    this._msgService.onSubmitAlert();
  }

}
