import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-name',
  templateUrl: './my-name.component.html',
  styleUrls: ['./my-name.component.css']
})
export class MyNameComponent implements OnInit {
  name: string = 'Alan';
  originalName: string = this.name;

  appendName(){
    this.name += ' Alan' +  this.originalName;
  }


  constructor() { }

  ngOnInit() {
  }

}
