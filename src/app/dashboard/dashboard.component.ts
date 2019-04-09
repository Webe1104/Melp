import { Component, OnInit } from '@angular/core';

import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';
import { RESTAURANTS } from '../mock-restaurants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	// restaurans: Restaurants[] = [];
	restaurant = RESTAURANTS;

	constructor(private restaurantService: RestaurantService) { }

	ngOnInit() {
	  this.getRestaurants();
	}

	getRestaurants(): void {
	  this.restaurantService.getRestaurants()
	  	.subscribe(restaurants => this.restaurants = restaurants.slice(1,5))
	}

}
