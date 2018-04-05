import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { ShoopingListComponent } from './shooping-list/shooping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

const appRoutes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent },
         {path: 'new', component: RecipeEditComponent},
         {path: ':id', component: RecipeDetailsComponent},
         {path: ':id/edit', component: RecipeEditComponent}
    ] },
    { path: 'shoppingList', component: ShoopingListComponent }
];

@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule] 
})
export class AppRoutingModule {}