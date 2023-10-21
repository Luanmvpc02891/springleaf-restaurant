import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Combo } from 'src/app/interfaces/combo';
import { ComboService } from 'src/app/services/combo.service';

@Component({
  selector: 'app-user-combo',
  templateUrl: './user-combos.component.html',
  styleUrls: ['./user-combos.component.css']
})
export class UserCombosComponent {

  combos: Combo[] = [];

  constructor(private combosService: ComboService, private route: ActivatedRoute) {
    window.addEventListener('storage', (event) => {
      if (event.key && event.oldValue !== null) {
        localStorage.setItem(event.key, event.oldValue);
      }
    });
  }

  ngOnInit(): void {
    this.getCombos();
  }

  getCombos(): void {
    this.combosService.getCombos()
      .subscribe(combos => this.combos = combos);
  }

}
