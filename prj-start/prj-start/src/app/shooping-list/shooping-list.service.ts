import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoopingListService{
    shoopingEvent = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('tomatoes', 15),
    ];
    getIngredients(){
        return this.ingredients.slice();
    }
    getIngredient(index: number){
        return this.ingredients[index];
    }
    setIngredients(ingredient){
        this.ingredients.push(ingredient);
        this.shoopingEvent.next(this.ingredients.slice());
    }
   
    addIngredients(ingredients: Ingredient[]){
       /*  for(let ingredient of ingredients ){
            this.setIngredients(ingredient);
        }*/
        this.ingredients.push(...ingredients);
  
        this.shoopingEvent.next(this.ingredients.slice());
    }
    

}