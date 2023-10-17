import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantTable } from 'src/app/interfaces/restaurantTable';
import { RestaurantTableService } from 'src/app/services/restaurantTable.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-tables.component.html',
  styleUrls: ['./user-tables.component.css']
})
export class UserTablesComponent {
  tables: RestaurantTable[] = [];

  constructor(private tableservice: RestaurantTableService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.gettables();
  }

  gettables(): void {
    this.tableservice.getTables()
      .subscribe(tables => this.tables = tables);
  }
}
