import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminCategoryDetailComponent } from '../admin-category-detail/admin-category-detail.component';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent {

  category: Category | undefined;
  categories: Category[] = [];
  categoryForm: FormGroup;

  constructor(
    private categoriesService: CategoryService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private modalService: NgbModal
  ) {
    this.categoryForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      active: [, [Validators.required]],
      description: [, [Validators.nullValidator]],
    });
  }

  ngOnInit(): void {
    this.getCategories();
    this.categoryForm.get('active')?.setValue(true);
  }

  getCategories(): void {
    this.categoriesService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  addCategory(): void {

    const name = this.categoryForm.get('name')?.value?.trim() ?? '';
    const active = this.categoryForm.get('active')?.value;
    const description = this.categoryForm.get('description')?.value;

    if (!name || active === null) { return; }

    this.categoriesService.addCategory({ name, active, description } as Category)
      .subscribe(category => {
        this.categories.push(category);
        this.categoryForm.reset();
        this.categoryForm.get('active')?.setValue(true);
      });
  }

  deleteCategory(category: Category): void {
    this.categories = this.categories.filter(c => c !== category);
    this.categoriesService.deleteCategory(category.categoryId).subscribe();
  }

  getCategory(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.categoriesService.getCategory(id)
      .subscribe(category => this.category = category);
    this.categoryForm.get('name')?.setValue(this.category?.name);
  }

  openCategoryDetailModal(category: Category) {
    //this.getCategory();
    const modalRef = this.modalService.open(AdminCategoryDetailComponent, { size: 'lg' });
    modalRef.componentInstance.category = category;
  }

}
