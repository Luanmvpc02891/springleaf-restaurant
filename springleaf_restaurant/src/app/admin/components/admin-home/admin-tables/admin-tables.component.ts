import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Restaurant } from 'src/app/interfaces/restaurant';
import { Table } from 'src/app/interfaces/table';
import { TableStatus } from 'src/app/interfaces/table-status';
import { TableType } from 'src/app/interfaces/table-type';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { TableStatusService } from 'src/app/services/table-status.service';
import { TableTypeService } from 'src/app/services/table-type.service';
import { TableService } from 'src/app/services/table.service';
import { AdminTableDetailComponent } from '../admin-table-detail/admin-table-detail.component';

@Component({
  selector: 'app-admin-tables',
  templateUrl: './admin-tables.component.html',
  styleUrls: ['./admin-tables.component.css']
})
export class AdminTablesComponent {
  tables: Table[] = [];
  tableTypes: TableType[] = [];
  tableStatuses: TableStatus[] = [];
  restaurants: Restaurant[] = [];
  table: Table | undefined;
  fieldNames: string[] = [];
  tableForm: FormGroup;

  constructor(
    private tableService: TableService,
    private route: ActivatedRoute,
    private tableTypeService: TableTypeService,
    private tableStatusService: TableStatusService,
    private restaurantService: RestaurantService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private zone: NgZone) {
    this.tableForm = this.formBuilder.group({
      tableId: ['', [Validators.required]],
      tableName: ['', [Validators.required]],
      tableType: ['', [Validators.required]],
      tableStatus: ['', [Validators.required]],
      restaurantId: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.getTable();
    this.getTableStatus();
    this.getTableType();
    this.getRestaurant();

  }

  getTable(): void {
    this.tableService.getTables()
      .subscribe(table => this.tables = table);
  }

  getTableTypeById(tableType: number): Observable<TableType> {
    return this.tableTypeService.getTableType(tableType);
  }

  getRestaurantById(restaurantId: number): Observable<Restaurant> {
    return this.restaurantService.getRestaurant(restaurantId);
  }

  getTableStatusById(tableStatus: number): Observable<TableStatus> {
    return this.tableStatusService.getTableStatus(tableStatus);
  }

  getTableStatus(): void {
    this.tableStatusService.getTableStatuss()
      .subscribe(tableStatuss => this.tableStatuses = tableStatuss);
  }

  getTableType(): void {
    this.tableTypeService.getTableTypes()
      .subscribe(tableTypes => this.tableTypes = tableTypes);
  }
  getRestaurant(): void {
    this.restaurantService.getRestaurants()
      .subscribe(restaurants => this.restaurants = restaurants);
  }
  openTableDetailModal(table: Table) {
    //this.getCategory();
    const modalRef = this.modalService.open(AdminTableDetailComponent, { size: 'lg' });
    modalRef.componentInstance.table = table;
  }
  addTable(): void {
    // Lấy giá trị từ các trường select
    const tableName = this.tableForm.get('tableName')?.value;
    const tableType = this.tableForm.get('tableType')?.value;
    const tableStatus = this.tableForm.get('tableStatus')?.value;
    const restaurantId = this.tableForm.get('restaurantId')?.value;
    console.log("Giá trị đâu :" + tableName);
    // Kiểm tra xem người dùng đã chọn giá trị hợp lệ cho cả hai trường chưa
    // if (!tableName || !tableType || !tableStatus || !restaurantId) {
    //   alert('Vui lòng chọn');
    //   return;
    // }

    // Tạo một đối tượng Inventory và gán giá trị
    const newTable: Table = {
      tableId: 0, // Không cần gán giá trị cho trường này vì nó có thể được tạo tự động
      tableName: tableName,
      tableType: tableType,
      tableStatus: tableStatus,
      restaurantId: restaurantId
    };

    this.tableService.addTable(newTable)
      .subscribe(table => {
        console.log('table added:', table);
        // Lấy tên của thành phần và nhà cung cấp dựa vào ID 
        this.tables.push(table);
        // Cập nhật inventoriesCache trong service
        // this.inventoryService.updateInventoryCache(this.inventories);
        this.tableForm.reset();
      });

  }
  deleteTable(table: Table): void {
    this.tables = this.tables.filter(i => i !== table);
    this.tableService.deleteTable(table.tableId).subscribe();
  }
}
