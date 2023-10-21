import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartDetail } from 'src/app/interfaces/cart-detail';
import { CartDetailService } from 'src/app/services/cart-detail.service';
declare var $: any;
@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent {

  cartDetails: CartDetail[] = [];

  constructor(private cartDetailsService: CartDetailService, private route: ActivatedRoute) {
    window.addEventListener('storage', (event) => {
      if (event.key && event.oldValue !== null) {
        localStorage.setItem(event.key, event.oldValue);
      }
    });
  }

  ngOnInit(): void {
    this.getCarts();
  }

  getCarts(): void {
    this.cartDetailsService.getCartDetails()
      .subscribe(cartDetails => this.cartDetails = cartDetails);
  }
}
