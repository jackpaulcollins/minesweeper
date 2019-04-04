import { Component, OnInit } from '@angular/core';
import { Cell } from '../cell.model'

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  cells: Cell[] =[
    new Cell(1, 0, false),
    new Cell(2, 0, false),
    new Cell(3, 0, false),
    new Cell(4, 0, false),
    new Cell(5, 0, false),
    new Cell(6, 0, false),
    new Cell(7, 0, false),
    new Cell(8, 0, false),
    new Cell(9, 0, false),
  ];


  ngOnInit() {
    this.addMines(this.cells);

  }

  addMines(cells){
    console.log("adding mines")
    for (let i = 0; i < this.cells.length; i++) {
      const addMine = Math.floor(Math.random() * 100)
      if (addMine >= 80) {
          this.cells[i].mine = true
          console.log("added mine to cell " + (i+1))
      }
    }
    console.log(this.cells)
  }




  leftClick(cell: Cell){
    if (cell.mine === true) {
      alert("boom ya dead")
    } else if (cell.clicked != 0) {
      return false;
    } else {
      cell.clicked = 1;
    }
    console.log(cell)
    return false;
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


}
