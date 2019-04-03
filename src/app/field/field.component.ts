import { Component, OnInit } from '@angular/core';
import { Cell } from '../cell.model'

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  cells: Cell[] =[
    new Cell(1, 0),
    new Cell(2, 0),
    new Cell(3, 0),
    new Cell(4, 0),
    new Cell(5, 0),
    new Cell(6, 0),
    new Cell(7, 0),
    new Cell(8, 0),
    new Cell(9, 0),
  ];




  // name(event){
  //   const target = event.target;
  //   const id = target.id;
  //   console.log(id);
  //   console.log(target);
  //   const clickedID = this.clicked = id;
  //   console.log(clickedID)
  //   target.ngClass='color';
  // }

  onRightClick(event){
    const target = event.target;
    console.log(target + ' was right clicked');
    return false;
  }

  constructor() { }

  ngOnInit() {
    console.log(this.cells);
  }

}
