import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'src/app/interface/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-user-restaurant',
  templateUrl: './user-restaurant.component.html',
  styleUrls: ['./user-restaurant.component.css']
})
export class UserRestaurantComponent {
  restaurants: Restaurant[] = [];

  constructor(private restaurantsService: RestaurantService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getrestaurants();
  }

  getrestaurants(): void {
    this.restaurantsService.getRestaurants()
      .subscribe(restaurants => this.restaurants = restaurants);
  }
}
