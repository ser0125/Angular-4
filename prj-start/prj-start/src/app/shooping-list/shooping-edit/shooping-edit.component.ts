import { Subscription } from 'rxjs/Subscription';
import { ShoopingListService } from './../shooping-list.service';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm, AbstractControl } from '@angular/forms';

import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shooping-edit',
  templateUrl: './shooping-edit.component.html',
  styleUrls: ['./shooping-edit.component.css']
})
export class ShoopingEditComponent implements OnInit, OnDestroy {
ingredient: Ingredient;
amount: AbstractControl;
subscription: Subscription;
editMode = false;
editItemIndex: number;
editedItem: Ingredient;

   constructor(private shoopingListService: ShoopingListService) { }
@ViewChild('f') shoopingListForm: NgForm; 
  ngOnInit() {
    this.subscription = this.shoopingListService.startedEditing.subscribe(
      (index: number) => {
        this.editItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoopingListService.getIngredient(index);
        this.shoopingListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        }) 
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addItem(f: NgForm){
    this.ingredient = new Ingredient(f.value.name, f.value.amount);
    this.shoopingListService.setIngredients(this.ingredient);

  }

}
