import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Restaurant } from 'src/app/interfaces/restaurant';
import { RestaurantTable } from 'src/app/interfaces/restaurantTable';
import { TableStatus } from 'src/app/interfaces/table-status';
import { TableType } from 'src/app/interfaces/table-type';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { RestaurantTableService } from 'src/app/services/restaurantTable.service';
import { TableStatusService } from 'src/app/services/table-status.service';
import { TableTypeService } from 'src/app/services/table-type.service';
import { AdminTableDetailComponent } from '../admin-table-detail/admin-table-detail.component';

@Component({
  selector: 'app-admin-tables',
  templateUrl: './admin-tables.component.html',
  styleUrls: ['./admin-tables.component.css']
})
export class AdminTablesComponent {
  restaurantTables: RestaurantTable[] = [];
  tableTypes: TableType[] = [];
  tableStatuses: TableStatus[] = [];
  restaurants: Restaurant[] = [];
  restaurantTable: RestaurantTable | undefined;
  fieldNames: string[] = [];
  tableForm: FormGroup;

  constructor(
    private tableService: RestaurantTableService,
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
      .subscribe(table => this.restaurantTables = table);
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
  openTableDetailModal(table: RestaurantTable) {
    //this.getCategory();
    const modalRef = this.modalService.open(AdminTableDetailComponent, { size: 'lg' });
    modalRef.componentInstance.restaurantTable = table;
    modalRef.result.then((result) => {
      if (result === 'Close after saving') {
        this.getTable();
      }
    });
  }
  addTable(): void {
    // Lấy giá trị từ các trường select
    const tableName = this.tableForm.get('tableName')?.value;
    const tableType = this.tableForm.get('tableType')?.value;
    const tableStatus = this.tableForm.get('tableStatus')?.value;
    const restaurantId = this.tableForm.get('restaurantId')?.value;
    console.log("Giá trị đâu :" + tableName);

    const newTable: RestaurantTable = {
      tableId: 0, // Không cần gán giá trị cho trường này vì nó có thể được tạo tự động
      tableName: tableName,
      tableType: tableType,
      tableStatus: tableStatus,
      restaurantId: restaurantId
    };

    this.tableService.addTable(newTable)
      .subscribe(table => {
        console.log('table added:', table);
        this.restaurantTables.push(table);
        this.tableForm.reset();
      });

  }
  deleteTable(table: RestaurantTable): void {
    this.restaurantTables = this.restaurantTables.filter(i => i !== table);
    this.tableService.deleteTable(table.tableId).subscribe();
  }
}
