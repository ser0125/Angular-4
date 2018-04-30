import { Recipe } from './../recipe.model';
import { RecipeService } from './../recipe.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit  {
  private recipe: Recipe;
  id: number;
  constructor(private recipeService: RecipeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }


              ngOnInit() {
                 this.activatedRoute.params.subscribe(
                  (params: Params) => {
                    this.id = params['id'];
                    this.recipe = this.recipeService.getRecipe(this.id);
                  }
                )
              }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute});
  //this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.activatedRoute});
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }


}
