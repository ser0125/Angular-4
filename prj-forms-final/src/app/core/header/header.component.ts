import { AuthService } from './../../auth/auth.service';
import { RecipeService } from './../../recipes/recipe.service';
import { DataStorageService } from './../../shared/dataStorage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private dataStorage: DataStorageService,
     private authService: AuthService) {

  }
  onSave() {
    this.dataStorage.storeRecipe().subscribe(
      (response: Response) => console.log(response)
    );
  }
  onGet() {
    this.dataStorage.getRecipes();
  }
  onLogout() {
    this.authService.logout();
  }
  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
