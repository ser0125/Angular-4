import { ShoopingListService } from './../shooping-list/shooping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService{
	private recipes: Recipe[] = [
		new Recipe(
		'A test recipe',
		'Test',
		'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg',
		[new Ingredient ('Meat',1),
		new Ingredient ('French Fries',20)
		]
	),
		new Recipe(
		'A second test recipe',
		'Testing again',
		'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
		[new Ingredient ('Buns',2),
		new Ingredient ('Chicken',1)
		]
	)
		];
				

		constructor(private shoopingListService: ShoopingListService){}

		getRecipes(){
			return this.recipes.slice();
		}

		getRecipe(id: number){
			return this.recipes[id];
		}


		addIngredientsToShoppingList(ingredient: Ingredient[]){
			console.log(ingredient);
			this.shoopingListService.addIngredients(ingredient);
		}

}