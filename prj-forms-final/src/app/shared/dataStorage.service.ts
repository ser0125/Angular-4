import { AuthService } from './../auth/auth.service';
import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class DataStorageService {
constructor(private http: HttpClient,
     private recipeService: RecipeService,
    private authService: AuthService) {

}
    storeRecipe() {
      return  this.http.put('https://ng-recipe-book-37c64.firebaseio.com/recipes.json',
        this.recipeService.getRecipes());
    }

    getRecipes() {
    const token = this.authService.getToken();
      return  this.http.get('https://ng-recipe-book-37c64.firebaseio.com/recipes.json?auth=' + token)
      .map(
          (response: Recipe[]) => {
            let recipes;
              for (recipes of response) {
                  if (!recipes['ingredients']) {
                    recipes['ingredients'] = [];
                  }
              }
              return response;
          }
      )
        .subscribe(
            (response: Recipe[]) => {
                this.recipeService.replaceRecipes(response);
            }
        );
      }

}