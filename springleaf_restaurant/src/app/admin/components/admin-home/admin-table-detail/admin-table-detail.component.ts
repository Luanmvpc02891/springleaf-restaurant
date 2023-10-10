import { Component, Input, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Restaurant } from 'src/app/interfaces/restaurant';
import { Table } from 'src/app/interfaces/table';
import { TableStatus } from 'src/app/interfaces/table-status';
import { TableType } from 'src/app/interfaces/table-type';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { TableStatusService } from 'src/app/services/table-status.service';
import { TableTypeService } from 'src/app/services/table-type.service';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-admin-table-detail',
  templateUrl: './admin-table-detail.component.html',
  styleUrls: ['./admin-table-detail.component.css']
})
export class AdminTableDetailComponent {
  @Input()
  fieldNames: string[] = [];
  tables: Table[] = [];
  tableTypes: TableType[] = [];
  tableStatuses: TableStatus[] = [];
  restaurants: Restaurant[] = [];
  table: Table | undefined;
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
    this.setValue();

  }

  setValue() {
    if (this.table) {
      this.tableForm.patchValue({
        tableId: this.table.tableId,
        tableName: this.table.tableName,
        restaurantId: this.table.restaurantId,
        tableType: this.table.tableType,
        tableStatus: this.table.tableStatus,
      });
    }
  }

  getTable(): void {
    this.tableService.getTables()
      .subscribe(tables => this.tables = tables);
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

}
