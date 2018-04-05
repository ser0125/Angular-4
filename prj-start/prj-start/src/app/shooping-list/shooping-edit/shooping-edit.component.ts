import { ShoopingListService } from './../shooping-list.service';
import { Component, OnInit, ViewChild} from '@angular/core';

import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shooping-edit',
  templateUrl: './shooping-edit.component.html',
  styleUrls: ['./shooping-edit.component.css']
})
export class ShoopingEditComponent implements OnInit {
@ViewChild('amountInput') amountInput; 
@ViewChild('nameInput') nameInput; 
ingredient: Ingredient;
   constructor(private shoopingListService: ShoopingListService) { }

  ngOnInit() {
  }
  addItem(){
    this.ingredient = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    this.shoopingListService.setIngredients(this.ingredient);


  }

}
