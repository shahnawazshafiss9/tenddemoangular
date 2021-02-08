import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  //1.  @Input() splaceholder:string;

  @Input() selectProduct:boolean= false;
  @Input() productName:string;
  @Output() addProduct = new EventEmitter<any>();

  onAddProduct(){
    this.addProduct.emit(this.productName);
  }
  ngOnInit(): void {
  }
}
