import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shooping-edit',
  templateUrl: './shooping-edit.component.html',
  styleUrls: ['./shooping-edit.component.css']
})
export class ShoopingEditComponent implements OnInit {
@ViewChild('amountInput') amountInput; 
@ViewChild('nameInput') nameInput; 
@Output() itemAdded = new EventEmitter<Ingredient>();
ingredient: Ingredient;
   constructor() { }

  ngOnInit() {
  }
  addItem(){
    this.ingredient = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    this.itemAdded.emit(this.ingredient);

  }

}
