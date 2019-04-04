import { Component, OnInit } from '@angular/core';
import { Cell } from '../cell.model'

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {
  game: string;

  cells: Cell[] =[
    new Cell(1, 1, 0, false),
    new Cell(2, 1, 0, false),
    new Cell(3, 1, 0, false),
    new Cell(4, 1, 0, false),
    new Cell(5, 1, 0, false),
    new Cell(6, 1, 0, false),
    new Cell(1, 2, 0, false),
    new Cell(2, 2, 0, false),
    new Cell(3, 2, 0, false),
    new Cell(4, 2, 0, false),
    new Cell(5, 2, 0, false),
    new Cell(6, 2, 0, false),
    new Cell(1, 3, 0, false),
    new Cell(2, 3, 0, false),
    new Cell(3, 3, 0, false),
    new Cell(4, 3, 0, false),
    new Cell(5, 3, 0, false),
    new Cell(6, 3, 0, false),
    new Cell(1, 4, 0, false),
    new Cell(2, 4, 0, false),
    new Cell(3, 4, 0, false),
    new Cell(4, 4, 0, false),
    new Cell(5, 4, 0, false),
    new Cell(6, 4, 0, false),
    new Cell(1, 5, 0, false),
    new Cell(2, 5, 0, false),
    new Cell(3, 5, 0, false),
    new Cell(4, 5, 0, false),
    new Cell(5, 5, 0, false),
    new Cell(6, 5, 0, false),
    new Cell(1, 6, 0, false),
    new Cell(2, 6, 0, false),
    new Cell(3, 6, 0, false),
    new Cell(4, 6, 0, false),
    new Cell(5, 6, 0, false),
    new Cell(6, 6, 0, false),
  ];


  ngOnInit() {
    this.addMines(this.cells, 65);

  }

  addMines(cells, difficulty: number){
    this.game = '';
    for (let i = 0; i < this.cells.length; i++) {
      this.detectMines(cells[i]);
      const addMine = Math.floor(Math.random() * 100)
      if (addMine >= difficulty) {
          this.cells[i].mine = true;
          this.cells[i].clicked = 0;
          console.log("added mine to cell " + (i+1))
      } else {
        this.cells[i].clicked = 0;
        this.cells[i].mine = false;
      }
    }
  }


  detectMines(cell){
    
  }



  leftClick(cell: Cell){
    if (this.game == "over") {
        return false;
    }
    if (cell.mine === true) {
      cell.clicked = 1;
      for (let i = 0; i < this.cells.length; i++) {
          if (this.cells[i].mine === true) {
              this.cells[i].clicked = 1;
          }
      }
      this.game = 'over'
    } else if (cell.clicked != 0) {
      return false;
    } else {
      cell.clicked = 1;
    }
    return false;
  }

  rightClick(cell: Cell, id: number){
    if (this.game == "over") {
        return false;
    }
    if (cell.clicked == 2) {
      cell.clicked = 0;
    } else if (cell.clicked == 1) {
      return false;
    } else {
      cell.clicked = 2;
    }
    return false;
  }

  constructor() { }


}
