import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecyclehook',
  templateUrl: './lifecyclehook.component.html',
  styleUrls: ['./lifecyclehook.component.css']
})
export class LifecyclehookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  value:string;
  submitValue(val){
    this.value = val.value;
  }

}
