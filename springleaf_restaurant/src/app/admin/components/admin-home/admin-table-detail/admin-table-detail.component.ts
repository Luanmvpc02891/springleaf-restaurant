import { Component, Input, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Restaurant } from 'src/app/interfaces/restaurant';
import { RestaurantTable } from 'src/app/interfaces/restaurantTable';
import { TableStatus } from 'src/app/interfaces/table-status';
import { TableType } from 'src/app/interfaces/table-type';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { RestaurantTableService } from 'src/app/services/restaurantTable.service';

import { TableStatusService } from 'src/app/services/table-status.service';
import { TableTypeService } from 'src/app/services/table-type.service';

@Component({
  selector: 'app-admin-table-detail',
  templateUrl: './admin-table-detail.component.html',
  styleUrls: ['./admin-table-detail.component.css']
})
export class AdminTableDetailComponent {
  @Input() restaurantTable: RestaurantTable | undefined;
  fieldNames: string[] = [];
  tables: RestaurantTable[] = [];
  tableTypes: TableType[] = [];
  tableStatuses: TableStatus[] = [];
  restaurants: Restaurant[] = [];
  tableForm: FormGroup;
  constructor(
    private tableService: RestaurantTableService,
    private route: ActivatedRoute,
    private tableTypeService: TableTypeService,
    private tableStatusService: TableStatusService,
    private restaurantService: RestaurantService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
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
    if (this.restaurantTable) {
      this.tableForm.patchValue({
        tableId: this.restaurantTable.tableId,
        tableName: this.restaurantTable.tableName,
        restaurantId: this.restaurantTable.restaurantId,
        tableType: this.restaurantTable.tableType,
        tableStatus: this.restaurantTable.tableStatus,
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

  updateTable(): void {
    this.activeModal.close('Close after saving');
    if (this.tableForm.valid) {
      const updatedTable: RestaurantTable = {
        tableId: this.tableForm.get('tableId')?.value,
        tableName: this.tableForm.get('tableName')?.value,
        tableStatus: this.tableForm.get('tableStatus')?.value,
        tableType: this.tableForm.get('tableType')?.value,
        restaurantId: this.tableForm.get('restaurantId')?.value

      };
      this.tableService.updateTable(updatedTable).subscribe(() => {
        // Cập nhật cache
        this.tableService.updateTableCache(updatedTable);
      });
    }
  }
}
