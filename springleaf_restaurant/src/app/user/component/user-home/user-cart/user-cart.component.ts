import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartDetail } from 'src/app/interface/cart-detail';
import { CartService } from 'src/app/services/cart-detail.service';
declare var $: any;
@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent {

  cartDetails: CartDetail[] = [];

  constructor(private cartsService: CartService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getCarts();
  }

  getCarts(): void {
    this.cartsService.getCarts()
      .subscribe(cartDetails => this.cartDetails = cartDetails);
  }
}
