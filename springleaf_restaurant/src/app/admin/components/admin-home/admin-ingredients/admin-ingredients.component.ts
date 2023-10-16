import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Ingredient } from 'src/app/interfaces/ingredient';
import { IngredientService } from 'src/app/services/ingredient.service';
import { AdminIngredientDetailComponent } from '../admin-ingredient-detail/admin-ingredient-detail.component';

@Component({
  selector: 'app-admin-ingredient',
  templateUrl: './admin-ingredients.component.html',
  styleUrls: ['./admin-ingredients.component.css']
})
export class AdminIngredientsComponent {
  ingredients: Ingredient[] = [];
  ingredientForm: FormGroup;
  ingredient: Ingredient | undefined;
  fieldNames: string[] = [];

  constructor(
    private ingredientService: IngredientService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,) {
    this.ingredientForm = this.formBuilder.group({
      // ingredientId: ['', [Validators.required]],
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      orderThreshold: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.getIngredients();
  }

  getIngredients(): void {
    this.ingredientService.getIngredients()
      .subscribe(ingredient => this.ingredients = ingredient);
  }

  addIngredient(): void {
    const name = this.ingredientForm.get('name')?.value;
    const description = this.ingredientForm.get('description')?.value;
    const orderThreshold = this.ingredientForm.get('orderThreshold')?.value;
    console.log("Giá trị đâu :" + orderThreshold);

    // Tạo một đối tượng Inventory và gán giá trị
    const newIngredient: Ingredient = {
      ingredientId: 0, // Không cần gán giá trị cho trường này vì nó có thể được tạo tự động
      name: name,
      description: description,
      orderThreshold: orderThreshold
    };

    this.ingredientService.addIngredient(newIngredient)
      .subscribe(ingredient => {
        console.log('Ingredient added:', ingredient);
        this.ingredients.push(ingredient);
        this.ingredientForm.reset();
      });
  }
  deleteIngredient(ingredient: Ingredient): void {
    this.ingredients = this.ingredients.filter(i => i !== ingredient);
    this.ingredientService.deleteIngredient(ingredient.ingredientId).subscribe();
  }
  openIngredientDetailModal(ingredient: Ingredient) {
    const modalRef = this.modalService.open(AdminIngredientDetailComponent, { size: 'lg' });
    modalRef.componentInstance.ingredient = ingredient;

  }
}
