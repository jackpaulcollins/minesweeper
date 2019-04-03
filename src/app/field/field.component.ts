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





  leftClick(cell: Cell){
    cell.clicked = 1;
    console.log(cell)
  }

  rightClick(cell: Cell, id: number){
    if (cell.clicked == 2) {
      cell.clicked = 0;
    } else if (cell.clicked == 1) {
      return false;
    } else {
      cell.clicked = 2;
    }
    console.log(cell)
    return false;
  }

  constructor() { }

  ngOnInit() {
    console.log(this.cells);
  }

}
