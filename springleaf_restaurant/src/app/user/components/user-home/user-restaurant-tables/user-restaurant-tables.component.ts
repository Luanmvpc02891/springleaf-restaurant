import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RestaurantTable } from 'src/app/interfaces/restaurant-table';
import { TableStatus } from 'src/app/interfaces/table-status';
import { RestaurantTableService } from 'src/app/services/restaurant-table.service';
import { TableStatusService } from 'src/app/services/table-status.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-restaurant-tables.component.html',
  styleUrls: ['./user-restaurant-tables.component.css']
})
export class UserRestaurantTablesComponent {
  restaurantTables: RestaurantTable[] = [];

  constructor(
    private restaurantTablesService: RestaurantTableService,
    private tableStatusesService: TableStatusService,
    private route: ActivatedRoute
  ) {
    window.addEventListener('storage', (event) => {
      if (event.key && event.oldValue !== null) {
        localStorage.setItem(event.key, event.oldValue);
      }
    });
  }

  ngOnInit(): void {
    this.getRestaurantTables();
  }

  getRestaurantTables(): void {
    this.restaurantTablesService.getRestaurantTables()
      .subscribe(restaurantTables => this.restaurantTables = restaurantTables);
  }

  getTableStatusById(tableStatusId: number): Observable<TableStatus> {
    return this.tableStatusesService.getTableStatusById(tableStatusId);
  }

}
