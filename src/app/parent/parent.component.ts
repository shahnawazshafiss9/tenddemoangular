import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
  proselectProduct:boolean= false;
  proproductName:string;
  addProduct:any;
  // 1. mytext:string;
  selectedProd(name){
    this.proselectProduct = true;
    this.proproductName= name;
  }
  onAddProduct(proData){
    this.addProduct = proData;
  }


  ngOnInit(): void {
  }

}
