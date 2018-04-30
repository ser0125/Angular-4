import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/dataStorage.service';
import { RecipeService } from './../recipes/recipe.service';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { AppRoutingModule } from './../app-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [
        ShoppingListService, RecipeService, DataStorageService, AuthService
    ]
})
export class CoreModule {

}
