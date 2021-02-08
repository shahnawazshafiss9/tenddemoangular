import { Component, OnInit } from '@angular/core';
import {Message} from '../appService/alertMessage.service'
@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  btnAlert(){
    const meg = new Message();
    meg.onSubmitAlert();
  }

}
