import { RoleFunctionService } from './service/roleFunction.service';
import { TableService } from './service/table.service';
import { ComboService } from './service/combo.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './service/product.service';
import { Category } from './interface/category';
import { CategoryService } from './service/category.service';
import { EventService } from './service/event.service';
import { RestaurantService } from './service/restaurant.service';
import { SupplierService } from './service/supplier.service';
import { TableStatusService } from './service/tableStatus.service';
import { IngredientService } from './service/ingredient.service';
import { RoleService } from './service/role.service';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'springleaf_restaurant';

  callAPIsWorker !: Worker;

  constructor(private productsService: ProductService, private categoryService: CategoryService, private ComboService: ComboService
    , private eventService: EventService, private tableService: TableService, private supplierService: SupplierService,
    private restaurantService: RestaurantService, private tableStatusService: TableStatusService, private ingredientsService: IngredientService
    , private rolesService: RoleService, private roleFunctionService: RoleFunctionService, private userService: UserService) {
    this.callAPIsWorker = new Worker(new URL('./call-apis.worker', import.meta.url));
    this.startCategoriesAndProducts();
  }

  startCategoriesAndProducts(): void {
    this.callAPIsWorker.postMessage('start');
    this.callAPIsWorker.onmessage = ({ data }) => {
      if (data.type === 'categories') {
        this.categoryService.categoriesCache = data.data;
        console.log('Received categories:', data.data);
        // Các xử lý khác nếu cần
      } else if (data.type === 'products') {
        this.productsService.productsCache = data.data;
        console.log('Received products:', data.data);
        // Các xử lý khác nếu cần
      } else if (data.type === 'combos') {
        this.ComboService.combosCache = data.data;
        console.log('Received combos:', data.data);
        // Các xử lý khác nếu cần
      } else if (data.type === 'evens') {
        this.eventService.evensCache = data.data;
        console.log('Received evens:', data.data);
        // Các xử lý khác nếu cần
      } else if (data.type === 'tables') {
        this.tableService.tablesCache = data.data;
        console.log('Received table:', data.data);
        // Các xử lý khác nếu cần
      } else if (data.type === 'restaurants') {
        this.restaurantService.restaurantsCache = data.data;
        console.log('Received restaurants:', data.data);
        // Các xử lý khác nếu cần
      } else if (data.type === 'suppliers') {
        this.supplierService.suppliersCache = data.data;
        console.log('Received suppliers:', data.data);
        // Các xử lý khác nếu cần
      } else if (data.type === 'tableStatuss') {
        this.tableStatusService.tableStatusCache = data.data;
        console.log('Received tableStatuss:', data.data);
        // Các xử lý khác nếu cần
      } else if (data.type === 'ingredient') {
        this.ingredientsService.ingredientsCache = data.data;
        // Các xử lý khác nếu cần
      } else if (data.type === 'roles') {
        this.rolesService.rolesCache = data.data;
        // Các xử lý khác nếu cần
      } else if (data.type === 'roleFunctions') {
        this.roleFunctionService.roleFunctionsCache = data.data;
        // Các xử lý khác nếu cần
      } else if (data.type === 'users') {
        this.userService.usersCache = data.data;
        // Các xử lý khác nếu cần
      }
    };
  }

  ngOnDestroy(): void {
    this.callAPIsWorker.terminate();
  }

}
