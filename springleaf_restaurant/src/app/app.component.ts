
import { RoleFunctionService } from './services/role-function.service';
import { TableService } from './services/table.service';
import { ComboService } from './services/combo.service';
import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';
import { EventService } from './services/event.service';
import { RestaurantService } from './services/restaurant.service';
import { SupplierService } from './services/supplier.service';
import { TableStatusService } from './services/table-status.service';
import { IngredientService } from './services/ingredient.service';
import { RoleService } from './services/role.service';
import { UserService } from './services/user.service';
import { BillService } from './services/bill.service';
import { CartDetailService } from './services/cart-detail.service';
import { BillDetailService } from './services/bill-detail.service';
import { CartService } from './services/cart.service';
import { ComboDetailService } from './services/combo-detail.service';
import { DeliveryService } from './services/delivery.service';
import { DeliveryDetailService } from './services/delivery-detail.service';
import { DeliveryOrderService } from './services/delivery-order.service';
import { DeliveryOrderStatusService } from './services/delivery-order-status.service';
import { DeliveryOrderDetailService } from './services/delivery-order-detail.service';
import { FavoriteService } from './services/favorite.service';
import { InventoryService } from './services/inventory.service';
import { InventoryBranchService } from './services/inventory-branch.service';
import { MenuItemIngredientService } from './services/menu-tem-ingredient.service';
import { OrderThresholdService } from './services/order-threshold.service';
import { MergeTableService } from './services/merge-table.service';
import { OrderTypeService } from './services/order-type.service';
import { PaymentService } from './services/payment.service';
import { RatingService } from './services/rating.service';
import { ReceiptService } from './services/receipt.service';
import { ReceiptDetailService } from './services/receipt-detail.service';
import { ReservationService } from './services/reservation.service';
import { RestaurantTableService } from './services/restaurant-table.service';
import { Category } from './interfaces/category';
import { Product } from './interfaces/product';
import { Combo } from './interfaces/combo';
import { Event } from './interfaces/event';
import { Table } from './interfaces/table';
import { Restaurant } from './interfaces/restaurant';
import { Supplier } from './interfaces/supplier';
import { TableStatus } from './interfaces/table-status';
import { Ingredient } from './interfaces/ingredient';
import { Role } from './interfaces/role';
import { RoleFunction } from './interfaces/role-function';
import { User } from './interfaces/user';
import { Bill } from './interfaces/bill';
import { CartDetail } from './interfaces/cart-detail';
import { BillDetail } from './interfaces/bill-detail';
import { Cart } from './interfaces/cart';
import { ComboDetail } from './interfaces/combo-detail';
import { Delivery } from './interfaces/delivery';
import { DeliveryDetail } from './interfaces/delivery-detail';
import { DeliveryOrder } from './interfaces/delivery-order';
import { DeliveryOrderStatus } from './interfaces/delivery-order-status';
import { DeliveryOrderDetail } from './interfaces/delivery-order-detail';
import { Favorite } from './interfaces/favorite';
import { Inventory } from './interfaces/inventory';
import { InventoryBranch } from './interfaces/inventory-branch';
import { MenuItemIngredient } from './interfaces/menu-item-ingredient';
import { OrderThreshold } from './interfaces/order-threshold';
import { MergeTable } from './interfaces/merge-table';
import { OrderType } from './interfaces/order-type';
import { Payment } from './interfaces/payment';
import { Rating } from './interfaces/rating';
import { Receipt } from './interfaces/receipt';
import { ReceiptDetail } from './interfaces/receipt-detail';
import { Reservation } from './interfaces/reservation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'springleaf_restaurant';

  callAPIsWorker !: Worker;
  dataLoaded = false;

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
    private billService: BillService,
    private cartDetailService: CartDetailService,
    private billDetailService: BillDetailService,
    private cartService: CartService,
    private comboDetailService: ComboDetailService,
    private deliveryService: DeliveryService,
    private deliveryDetailService: DeliveryDetailService,
    private deliveryOrderService: DeliveryOrderService,
    private deliveryOrderStatusService: DeliveryOrderStatusService,
    private deliveryOrderDetailService: DeliveryOrderDetailService,
    private favoriteService: FavoriteService,
    private inventoryService: InventoryService,
    private inventoryBranchService: InventoryBranchService,
    private menuItemIngredientService: MenuItemIngredientService,
    private orderThresholdService: OrderThresholdService,
    private mergeTableService: MergeTableService,
    private orderTypeService: OrderTypeService,
    private paymentService: PaymentService,
    private ratingService: RatingService,
    private receiptService: ReceiptService,
    private receiptDetailService: ReceiptDetailService,
    private reservationService: ReservationService,
  ) {
    this.callAPIsWorker = new Worker(new URL('./call-apis.worker', import.meta.url));
    this.callAllApis();
  }

  callAllApis(): void {
    this.callAPIsWorker.postMessage('start');
    this.callAPIsWorker.onmessage = ({ data }) => {

      if (data.type === 'categories') {

        if (localStorage.getItem('categories')) {
          this.categoryService.categoriesCache = JSON.parse(localStorage.getItem('categories') || 'null') as Category[] | null || [];
          console.log("Lấy dữ liệu categories từ Local Storage");
        } else {
          this.categoryService.categoriesCache = data.data;
          localStorage.setItem('categories', JSON.stringify(data.data));
          console.log("Lấy dữ liệu categories từ api");
        }
        console.log('Received categories:', this.categoryService.categoriesCache);

      } else if (data.type === 'products') {

        if (localStorage.getItem('products')) {
          this.productService.productsCache = JSON.parse(localStorage.getItem('products') || 'null') as Product[] | null || [];
          console.log("Lấy dữ liệu products từ Local Storage");
        } else {
          this.productService.productsCache = data.data;
          localStorage.setItem('products', JSON.stringify(data.data));
          console.log("Lấy dữ liệu products từ api");
        }
        console.log('Received products:', this.productService.productsCache);

      } else if (data.type === 'combos') {

        if (localStorage.getItem('combos')) {
          this.comboService.combosCache = JSON.parse(localStorage.getItem('combos') || 'null') as Combo[] | null || [];
          console.log("Lấy dữ liệu combos từ Local Storage");
        } else {
          this.comboService.combosCache = data.data;
          localStorage.setItem('combos', JSON.stringify(data.data));
          console.log("Lấy dữ liệu combos từ api");
        }
        console.log('Received combos:', this.comboService.combosCache);

      } else if (data.type === 'events') {

        if (localStorage.getItem('events')) {
          this.eventService.eventsCache = JSON.parse(localStorage.getItem('events') || 'null') as Event[] | null || [];
          console.log("Lấy dữ liệu events từ Local Storage");
        } else {
          this.eventService.eventsCache = data.data;
          localStorage.setItem('events', JSON.stringify(data.data));
          console.log("Lấy dữ liệu events từ api");
        }
        console.log('Received events:', this.eventService.eventsCache);

      } else if (data.type === 'tables') {

        if (localStorage.getItem('tables')) {
          this.tableService.tablesCache = JSON.parse(localStorage.getItem('tables') || 'null') as Table[] | null || [];
          console.log("Lấy dữ liệu tables từ Local Storage");
        } else {
          this.tableService.tablesCache = data.data;
          localStorage.setItem('tables', JSON.stringify(data.data));
          console.log("Lấy dữ liệu tables từ api");
        }
        console.log('Received tables:', this.eventService.eventsCache);

      } else if (data.type === 'restaurants') {

        if (localStorage.getItem('restaurants')) {
          this.restaurantService.restaurantsCache = JSON.parse(localStorage.getItem('restaurants') || 'null') as Restaurant[] | null || [];
          console.log("Lấy dữ liệu restaurants từ Local Storage");
        } else {
          this.restaurantService.restaurantsCache = data.data;
          localStorage.setItem('restaurants', JSON.stringify(data.data));
          console.log("Lấy dữ liệu restaurants từ api");
        }
        console.log('Received restaurants:', this.restaurantService.restaurantsCache);

      } else if (data.type === 'suppliers') {

        if (localStorage.getItem('suppliers')) {
          this.supplierService.suppliersCache = JSON.parse(localStorage.getItem('suppliers') || 'null') as Supplier[] | null || [];
          console.log("Lấy dữ liệu suppliers từ Local Storage");
        } else {
          this.supplierService.suppliersCache = data.data;
          localStorage.setItem('suppliers', JSON.stringify(data.data));
          console.log("Lấy dữ liệu suppliers từ api");
        }
        console.log('Received suppliers:', this.supplierService.suppliersCache);

      } else if (data.type === 'tableStatuses') {

        if (localStorage.getItem('tableStatuses')) {
          this.tableStatusService.tableStatusesCache = JSON.parse(localStorage.getItem('tableStatuses') || 'null') as TableStatus[] | null || [];
          console.log("Lấy dữ liệu suppliers từ Local Storage");
        } else {
          this.tableStatusService.tableStatusesCache = data.data;
          localStorage.setItem('tableStatuses', JSON.stringify(data.data));
          console.log("Lấy dữ liệu tableStatuses từ api");
        }
        console.log('Received tableStatuses:', this.tableStatusService.tableStatusesCache);

      } else if (data.type === 'ingredients') {

        if (localStorage.getItem('ingredients')) {
          this.ingredientService.ingredientsCache = JSON.parse(localStorage.getItem('ingredients') || 'null') as Ingredient[] | null || [];
          console.log("Lấy dữ liệu ingredients từ Local Storage");
        } else {
          this.ingredientService.ingredientsCache = data.data;
          localStorage.setItem('ingredients', JSON.stringify(data.data));
          console.log("Lấy dữ liệu ingredients từ api");
        }
        console.log('Received ingredients:', this.ingredientService.ingredientsCache);

      } else if (data.type === 'roles') {

        if (localStorage.getItem('roles')) {
          this.roleService.rolesCache = JSON.parse(localStorage.getItem('roles') || 'null') as Role[] | null || [];
          console.log("Lấy dữ liệu roles từ Local Storage");
        } else {
          this.roleService.rolesCache = data.data;
          localStorage.setItem('roles', JSON.stringify(data.data));
          console.log("Lấy dữ liệu roles từ api");
        }
        console.log('Received roles:', this.roleService.rolesCache);

      } else if (data.type === 'roleFunctions') {

        if (localStorage.getItem('roleFunctions')) {
          this.roleFunctionService.roleFunctionsCache = JSON.parse(localStorage.getItem('roleFunctions') || 'null') as RoleFunction[] | null || [];
          console.log("Lấy dữ liệu roleFunctions từ Local Storage");
        } else {
          this.roleFunctionService.roleFunctionsCache = data.data;
          localStorage.setItem('roleFunctions', JSON.stringify(data.data));
          console.log("Lấy dữ liệu roleFunctions từ api");
        }
        console.log('Received roleFunctions:', this.roleFunctionService.roleFunctionsCache);

      } else if (data.type === 'users') {

        if (localStorage.getItem('users')) {
          this.userService.usersCache = JSON.parse(localStorage.getItem('users') || 'null') as User[] | null || [];
          console.log("Lấy dữ liệu users từ Local Storage");
        } else {
          this.userService.usersCache = data.data;
          localStorage.setItem('users', JSON.stringify(data.data));
          console.log("Lấy dữ liệu users từ api");
        }
        console.log('Received users:', this.userService.usersCache);

      } else if (data.type === 'bills') {

        if (localStorage.getItem('bills')) {
          this.billService.billsCache = JSON.parse(localStorage.getItem('bills') || 'null') as Bill[] | null || [];
          console.log("Lấy dữ liệu bills từ Local Storage");
        } else {
          this.billService.billsCache = data.data;
          localStorage.setItem('bills', JSON.stringify(data.data));
          console.log("Lấy dữ liệu bills từ api");
        }
        console.log('Received bills:', this.billService.billsCache);

      } else if (data.type === 'cartDetails') {

        if (localStorage.getItem('cartDetails')) {
          this.cartDetailService.cartDetailsCache = JSON.parse(localStorage.getItem('cartDetails') || 'null') as CartDetail[] | null || [];
          console.log("Lấy dữ liệu cartDetails từ Local Storage");
        } else {
          this.cartDetailService.cartDetailsCache = data.data;
          localStorage.setItem('cartDetails', JSON.stringify(data.data));
          console.log("Lấy dữ liệu cartDetails từ api");
        }
        console.log('Received cartDetails:', this.cartDetailService.cartDetailsCache);

      } else if (data.type === 'billDetails') {

        if (localStorage.getItem('billDetails')) {
          this.billDetailService.billDetailsCache = JSON.parse(localStorage.getItem('billDetails') || 'null') as BillDetail[] | null || [];
          console.log("Lấy dữ liệu billDetails từ Local Storage");
        } else {
          this.billDetailService.billDetailsCache = data.data;
          localStorage.setItem('billDetails', JSON.stringify(data.data));
          console.log("Lấy dữ liệu billDetails từ api");
        }
        console.log('Received billDetails:', this.billDetailService.billDetailsCache);

      } else if (data.type === 'carts') {

        if (localStorage.getItem('carts')) {
          this.cartService.cartsCache = JSON.parse(localStorage.getItem('carts') || 'null') as Cart[] | null || [];
          console.log("Lấy dữ liệu carts từ Local Storage");
        } else {
          this.cartService.cartsCache = data.data;
          localStorage.setItem('carts', JSON.stringify(data.data));
          console.log("Lấy dữ liệu carts từ api");
        }
        console.log('Received carts:', this.cartService.cartsCache);

      } else if (data.type === 'comboDetails') {

        if (localStorage.getItem('comboDetails')) {
          this.comboDetailService.comboDetailsCache = JSON.parse(localStorage.getItem('comboDetails') || 'null') as ComboDetail[] | null || [];
          console.log("Lấy dữ liệu comboDetails từ Local Storage");
        } else {
          this.comboDetailService.comboDetailsCache = data.data;
          localStorage.setItem('comboDetails', JSON.stringify(data.data));
          console.log("Lấy dữ liệu comboDetails từ api");
        }
        console.log('Received comboDetails:', this.comboDetailService.comboDetailsCache);

      } else if (data.type === 'deliveries') {

        if (localStorage.getItem('deliveries')) {
          this.deliveryService.deliverysCache = JSON.parse(localStorage.getItem('deliveries') || 'null') as Delivery[] | null || [];
          console.log("Lấy dữ liệu deliveries từ Local Storage");
        } else {
          this.deliveryService.deliverysCache = data.data;
          localStorage.setItem('deliveries', JSON.stringify(data.data));
          console.log("Lấy dữ liệu deliveries từ api");
        }
        console.log('Received deliveries:', this.deliveryService.deliverysCache);

      } else if (data.type === 'deliveryDetails') {

        if (localStorage.getItem('deliveryDetails')) {
          this.deliveryDetailService.deliveryDetailsCache = JSON.parse(localStorage.getItem('deliveryDetails') || 'null') as DeliveryDetail[] | null || [];
          console.log("Lấy dữ liệu deliveryDetails từ Local Storage");
        } else {
          this.deliveryDetailService.deliveryDetailsCache = data.data;
          localStorage.setItem('deliveryDetails', JSON.stringify(data.data));
          console.log("Lấy dữ liệu deliveryDetails từ api");
        }
        console.log('Received deliveryDetails:', this.deliveryDetailService.deliveryDetailsCache);

      } else if (data.type === 'deliveryOrders') {

        if (localStorage.getItem('deliveryOrders')) {
          this.deliveryOrderService.deliveryOrdersCache = JSON.parse(localStorage.getItem('deliveryOrders') || 'null') as DeliveryOrder[] | null || [];
          console.log("Lấy dữ liệu deliveryOrders từ Local Storage");
        } else {
          this.deliveryOrderService.deliveryOrdersCache = data.data;
          localStorage.setItem('deliveryOrders', JSON.stringify(data.data));
          console.log("Lấy dữ liệu deliveryOrders từ api");
        }
        console.log('Received deliveryOrders:', this.deliveryOrderService.deliveryOrdersCache);

      } else if (data.type === 'deliveryOrderStatuss') {

        if (localStorage.getItem('deliveryOrderStatuss')) {
          this.deliveryOrderStatusService.deliveryOrderStatussCache = JSON.parse(localStorage.getItem('deliveryOrderStatuss') || 'null') as DeliveryOrderStatus[] | null || [];
          console.log("Lấy dữ liệu deliveryOrderStatuss từ Local Storage");
        } else {
          this.deliveryOrderStatusService.deliveryOrderStatussCache = data.data;
          localStorage.setItem('deliveryOrderStatuss', JSON.stringify(data.data));
          console.log("Lấy dữ liệu deliveryOrderStatuss từ api");
        }
        console.log('Received deliveryOrderStatuss:', this.deliveryOrderStatusService.deliveryOrderStatussCache);

      } else if (data.type === 'deliveryOrderDetails') {

        if (localStorage.getItem('deliveryOrderDetails')) {
          this.deliveryOrderDetailService.deliveryOrderDetailsCache = JSON.parse(localStorage.getItem('deliveryOrderDetails') || 'null') as DeliveryOrderDetail[] | null || [];
          console.log("Lấy dữ liệu deliveryOrderDetails từ Local Storage");
        } else {
          this.deliveryOrderDetailService.deliveryOrderDetailsCache = data.data;
          localStorage.setItem('deliveryOrderDetails', JSON.stringify(data.data));
          console.log("Lấy dữ liệu deliveryOrderDetails từ api");
        }
        console.log('Received deliveryOrderDetails:', this.deliveryOrderDetailService.deliveryOrderDetailsCache);

      } else if (data.type === 'favorites') {

        if (localStorage.getItem('favorites')) {
          this.favoriteService.favoritesCache = JSON.parse(localStorage.getItem('favorites') || 'null') as Favorite[] | null || [];
          console.log("Lấy dữ liệu favorites từ Local Storage");
        } else {
          this.favoriteService.favoritesCache = data.data;
          localStorage.setItem('favorites', JSON.stringify(data.data));
          console.log("Lấy dữ liệu favorites từ api");
        }
        console.log('Received favorites:', this.favoriteService.favoritesCache);

      } else if (data.type === 'inventories') {

        if (localStorage.getItem('inventories')) {
          this.inventoryService.inventoriesCache = JSON.parse(localStorage.getItem('inventories') || 'null') as Inventory[] | null || [];
          console.log("Lấy dữ liệu inventories từ Local Storage");
        } else {
          this.inventoryService.inventoriesCache = data.data;
          localStorage.setItem('inventories', JSON.stringify(data.data));
          console.log("Lấy dữ liệu inventories từ api");
        }
        console.log('Received inventories:', this.inventoryService.inventoriesCache);

      } else if (data.type === 'inventoryBranches') {

        if (localStorage.getItem('inventoryBranches')) {
          this.inventoryBranchService.inventoryBranchsCache = JSON.parse(localStorage.getItem('inventoryBranches') || 'null') as InventoryBranch[] | null || [];
          console.log("Lấy dữ liệu inventoryBranches từ Local Storage");
        } else {
          this.inventoryBranchService.inventoryBranchsCache = data.data;
          localStorage.setItem('inventoryBranches', JSON.stringify(data.data));
          console.log("Lấy dữ liệu inventoryBranches từ api");
        }
        console.log('Received inventoryBranches:', this.inventoryBranchService.inventoryBranchsCache);

      } else if (data.type === 'menuItemIngredients') {

        if (localStorage.getItem('menuItemIngredients')) {
          this.menuItemIngredientService.menuItemIngredientsCache = JSON.parse(localStorage.getItem('menuItemIngredients') || 'null') as MenuItemIngredient[] | null || [];
          console.log("Lấy dữ liệu menuItemIngredients từ Local Storage");
        } else {
          this.menuItemIngredientService.menuItemIngredientsCache = data.data;
          localStorage.setItem('menuItemIngredients', JSON.stringify(data.data));
          console.log("Lấy dữ liệu menuItemIngredients từ api");
        }
        console.log('Received menuItemIngredients:', this.menuItemIngredientService.menuItemIngredientsCache);

      } else if (data.type === 'orderThresholds') {

        if (localStorage.getItem('orderThresholds')) {
          this.orderThresholdService.orderThresholdsCache = JSON.parse(localStorage.getItem('orderThresholds') || 'null') as OrderThreshold[] | null || [];
          console.log("Lấy dữ liệu orderThresholds từ Local Storage");
        } else {
          this.orderThresholdService.orderThresholdsCache = data.data;
          localStorage.setItem('orderThresholds', JSON.stringify(data.data));
          console.log("Lấy dữ liệu orderThresholds từ api");
        }
        console.log('Received orderThresholds:', this.orderThresholdService.orderThresholdsCache);

      } else if (data.type === 'mergeTables') {

        if (localStorage.getItem('mergeTables')) {
          this.mergeTableService.mergeTablesCache = JSON.parse(localStorage.getItem('mergeTables') || 'null') as MergeTable[] | null || [];
          console.log("Lấy dữ liệu mergeTables từ Local Storage");
        } else {
          this.mergeTableService.mergeTablesCache = data.data;
          localStorage.setItem('mergeTables', JSON.stringify(data.data));
          console.log("Lấy dữ liệu mergeTables từ api");
        }
        console.log('Received mergeTables:', this.mergeTableService.mergeTablesCache);

      } else if (data.type === 'orderTypes') {

        if (localStorage.getItem('orderTypes')) {
          this.orderTypeService.orderTypesCache = JSON.parse(localStorage.getItem('orderTypes') || 'null') as OrderType[] | null || [];
          console.log("Lấy dữ liệu orderTypes từ Local Storage");
        } else {
          this.orderTypeService.orderTypesCache = data.data;
          localStorage.setItem('orderTypes', JSON.stringify(data.data));
          console.log("Lấy dữ liệu orderTypes từ api");
        }
        console.log('Received orderTypes:', this.orderTypeService.orderTypesCache);

      } else if (data.type === 'payments') {

        if (localStorage.getItem('payments')) {
          this.paymentService.paymentsCache = JSON.parse(localStorage.getItem('payments') || 'null') as Payment[] | null || [];
          console.log("Lấy dữ liệu payments từ Local Storage");
        } else {
          this.paymentService.paymentsCache = data.data;
          localStorage.setItem('payments', JSON.stringify(data.data));
          console.log("Lấy dữ liệu payments từ api");
        }
        console.log('Received payments:', this.paymentService.paymentsCache);

      } else if (data.type === 'ratings') {

        if (localStorage.getItem('ratings')) {
          this.ratingService.ratingsCache = JSON.parse(localStorage.getItem('ratings') || 'null') as Rating[] | null || [];
          console.log("Lấy dữ liệu ratings từ Local Storage");
        } else {
          this.ratingService.ratingsCache = data.data;
          localStorage.setItem('ratings', JSON.stringify(data.data));
          console.log("Lấy dữ liệu ratings từ api");
        }
        console.log('Received ratings:', this.ratingService.ratingsCache);

      } else if (data.type === 'receipts') {

        if (localStorage.getItem('receipts')) {
          this.receiptService.receiptsCache = JSON.parse(localStorage.getItem('receipts') || 'null') as Receipt[] | null || [];
          console.log("Lấy dữ liệu receipts từ Local Storage");
        } else {
          this.receiptService.receiptsCache = data.data;
          localStorage.setItem('receipts', JSON.stringify(data.data));
          console.log("Lấy dữ liệu receipts từ api");
        }
        console.log('Received receipts:', this.receiptService.receiptsCache);

      } else if (data.type === 'receiptDetails') {

        if (localStorage.getItem('receiptDetails')) {
          this.receiptDetailService.receiptDetailsCache = JSON.parse(localStorage.getItem('receiptDetails') || 'null') as ReceiptDetail[] | null || [];
          console.log("Lấy dữ liệu receiptDetails từ Local Storage");
        } else {
          this.receiptDetailService.receiptDetailsCache = data.data;
          localStorage.setItem('receiptDetails', JSON.stringify(data.data));
          console.log("Lấy dữ liệu receiptDetails từ api");
        }
        console.log('Received receiptDetails:', this.receiptDetailService.receiptDetailsCache);

      } else if (data.type === 'reservations') {

        if (localStorage.getItem('reservations')) {
          this.reservationService.reservationsCache = JSON.parse(localStorage.getItem('reservations') || 'null') as Reservation[] | null || [];
          console.log("Lấy dữ liệu reservations từ Local Storage");
        } else {
          this.reservationService.reservationsCache = data.data;
          localStorage.setItem('reservations', JSON.stringify(data.data));
          console.log("Lấy dữ liệu reservations từ api");
        }
        console.log('Received reservations:', this.reservationService.reservationsCache);

      }

      this.dataLoaded = true;
    };
  }

  ngOnDestroy(): void {
    this.callAPIsWorker.terminate();
  }

}
