import { RoleFunctionService } from './services/role-function.service';
import { TableService } from './services/table.service';
import { ComboService } from './services/combo.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './services/product.service';
import { Category } from './interface/category';
import { CategoryService } from './services/category.service';
import { EventService } from './services/event.service';
import { RestaurantService } from './services/restaurant.service';
import { SupplierService } from './services/supplier.service';
import { TableStatusService } from './services/table-status.service';
import { IngredientService } from './services/ingredient.service';
import { RoleService } from './services/role.service';
import { UserService } from './services/user.service';
import { UserCategoriesComponent } from './user/component/user-home/user-categories/user-categories.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'springleaf_restaurant';

  callAPIsWorker !: Worker;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private comboService: ComboService,
    private eventService: EventService,
    private tableService: TableService,
    private supplierService: SupplierService,
    private restaurantService: RestaurantService,
    private tableStatusService: TableStatusService,
    private ingredientService: IngredientService,
    private roleService: RoleService,
    private roleFunctionService: RoleFunctionService,
    private userService: UserService,
  ) {
    this.callAPIsWorker = new Worker(new URL('./call-apis.worker', import.meta.url));
    this.callAllApis();
  }

  callAllApis(): void {
    this.callAPIsWorker.postMessage('start');
    this.callAPIsWorker.onmessage = ({ data }) => {
      if (data.type === 'categories') {
        this.categoryService.categoriesCache = data.data;
        console.log('Received categories:', data.data);
        // Các xử lý khác nếu cần
      } else if (data.type === 'products') {
        this.productService.productsCache = data.data;
        console.log('Received products:', data.data);
        // Các xử lý khác nếu cần
      } else if (data.type === 'combos') {
        this.comboService.combosCache = data.data;
        console.log('Received combos:', data.data);
        // Các xử lý khác nếu cần
      } else if (data.type === 'events') {
        this.eventService.eventsCache = data.data;
        console.log('Received events:', data.data);
        // Các xử lý khác nếu cần
      } else if (data.type === 'tables') {
        this.tableService.tablesCache = data.data;
        console.log('Received tables:', data.data);
        // Các xử lý khác nếu cần
      } else if (data.type === 'restaurants') {
        this.restaurantService.restaurantsCache = data.data;
        console.log('Received restaurants:', data.data);
        // Các xử lý khác nếu cần
      } else if (data.type === 'suppliers') {
        this.supplierService.suppliersCache = data.data;
        console.log('Received suppliers:', data.data);
        // Các xử lý khác nếu cần
      } else if (data.type === 'tableStatuses') {
        this.tableStatusService.tableStatusesCache = data.data;
        console.log('Received tableStatuses:', data.data);
        // Các xử lý khác nếu cần
      } else if (data.type === 'ingredients') {
        this.ingredientService.ingredientsCache = data.data;
        console.log('Received ingredients:', data.data);
        // Các xử lý khác nếu cần
      } else if (data.type === 'roles') {
        this.roleService.rolesCache = data.data;
        console.log('Received roles:', data.data);
        // Các xử lý khác nếu cần
      } else if (data.type === 'roleFunctions') {
        this.roleFunctionService.roleFunctionsCache = data.data;
        console.log('Received role functions:', data.data);
        // Các xử lý khác nếu cần
      } else if (data.type === 'users') {
        this.userService.usersCache = data.data;
        console.log('Received users:', data.data);
        // Các xử lý khác nếu cần
      }
    };
  }

  ngOnDestroy(): void {
    this.callAPIsWorker.terminate();
  }

}
