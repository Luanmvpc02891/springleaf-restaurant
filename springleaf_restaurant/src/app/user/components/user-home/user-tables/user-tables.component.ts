import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Table } from 'src/app/interfaces/table';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-tables.component.html',
  styleUrls: ['./user-tables.component.css']
})
export class UserTablesComponent {
  tables: Table[] = [];

  constructor(private tableservice: TableService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.gettables();
  }

  gettables(): void {
    this.tableservice.getTables()
      .subscribe(tables => this.tables = tables);
  }
}
