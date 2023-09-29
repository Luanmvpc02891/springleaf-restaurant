import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Combo } from 'src/app/interface/combo';
import { ComboService } from 'src/app/services/combo.service';

@Component({
  selector: 'app-user-combo',
  templateUrl: './user-combo.component.html',
  styleUrls: ['./user-combo.component.css']
})
export class UserComboComponent {

  combos: Combo[] = [];

  constructor(private combosService: ComboService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.combosService.getCombos()
      .subscribe(combos => this.combos = combos);
  }

}
