import { Component, OnInit } from '@angular/core';
import {Message} from '../appService/alertMessage.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  btnAlert(){
    const message = new Message();
    message.onSubmitAlert();
  }


}
