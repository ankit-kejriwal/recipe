import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'test Recipe',
      'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/16:9/w_1200,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Buns', 1)]
    ),
    new Recipe(
      'A Test Recipe',
      'test Recipe',
      'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/16:9/w_1200,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg',
      [new Ingredient('Noddle', 1), new Ingredient('vegetables', 1)]
    )
  ];
  constructor(private shoppingListService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  addIngredienttoSLService(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
