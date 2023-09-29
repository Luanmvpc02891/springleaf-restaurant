import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Table } from 'src/app/interface/table';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {
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
