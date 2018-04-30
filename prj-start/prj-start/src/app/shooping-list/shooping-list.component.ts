import { Ingredient } from './../shared/ingredient.model';
import { ShoopingListService } from './shooping-list.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.css'],

})
export class ShoopingListComponent implements OnInit, OnDestroy  {
    ingredients: Ingredient[];
    private subscription: Subscription;

  constructor(private shoopingListService: ShoopingListService) { }
  
  ngOnInit(){
    this.ingredients = this.shoopingListService.getIngredients();
    this.subscription = this.shoopingListService.shoopingEvent.subscribe(
      (ingredients: Ingredient[]) => { 
        this.ingredients = ingredients;
      }
    );
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onEditItem(index: number){

  }
  }
