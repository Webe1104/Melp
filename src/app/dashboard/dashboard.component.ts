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
	restaurants: Restaurant[] = [];

	constructor(private restaurantService: RestaurantService) { }

	ngOnInit() {
	  this.getRestaurantsByProp('rating');
	}

	//Returns Restaurants by prop (mayor a menor)
	getRestaurantsByProp(prop: string): void {
	  this.restaurantService.getRestaurants()
	  	.subscribe(restaurants => this.restaurants = restaurants.sort((a, b) => a[prop] < b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1))
	}


	arr(size: number){
		return Array.from(Array(size), (_, i) => i);
	}

}
