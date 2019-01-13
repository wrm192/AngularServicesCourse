import { Recipe } from '../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
   @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test', 'This is a test', 'https://upload.wikimedia.org/wikipedia/commons/1/11/Test-Logo.svg'),
new Recipe('Test what is this', 'Another test', 'https://upload.wikimedia.org/wikipedia/commons/1/11/Test-Logo.svg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
