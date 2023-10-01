import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ingredient } from 'src/app/interfaces/ingredient';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'app-admin-ingredient',
  templateUrl: './admin-ingredient.component.html',
  styleUrls: ['./admin-ingredient.component.css']
})
export class AdminIngredientComponent {
  ingredient: Ingredient[] = [];

  constructor(private ingredientService: IngredientService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getIngredients();
  }

  getIngredients(): void {
    this.ingredientService.getIngredients()
      .subscribe(ingredient => this.ingredient = ingredient);
  }
}
