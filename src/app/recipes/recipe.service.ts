import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Burger', 'Delicious cheese burger', 'https://cdn.arstechnica.net/wp-content/uploads/2018/08/IF-Burger-800x603.jpg',
      [new Ingredient('Meat', 1),
        new Ingredient("Cheese", 1),
        new Ingredient( "Pickles" , 2)
      ]),
    new Recipe('Pizza', 'Amazing Pizza', 'https://istanbulcuisinewa.com/wp-content/uploads/2017/06/pizza_adven_zestypepperoni.png',
      [new Ingredient("Peperoni", 30),
        new Ingredient("Crust", 1)

      ])
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice(); // returns a new array. (copy of the recipes array)
  }

  getRecipe( id: number) {
    return this.recipes[id];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
