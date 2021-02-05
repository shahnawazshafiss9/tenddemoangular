import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})

export class NgforComponent implements OnInit {

  constructor(private router:Router) { }

  products = [
    {
      'image': 'https://images.unsplash.com/photo-1462450806522-59ae61ea99fa',
      'name': 'Mobile',
      'id': 'P01',
      'price': '20.60'
    },
    {
      'image': 'https://images.unsplash.com/photo-1425321505542-00715f6a9c28',
      'name': 'Leptop',
      'id': 'P02',
      'price': '23.60'
    }
  ];
  users = [];
  onCreateUser(uname) {
    this.users.push({
      name: uname.value
    });
    if(this.users.length > 3){
      this.router.navigate(['products']);
    }
  }
  onRemoveUser(item){
    console.log(item);
    this.users.splice(item, 1)
  }


  ngOnInit(): void {
  }





}
