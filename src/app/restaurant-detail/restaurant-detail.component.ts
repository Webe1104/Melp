import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';
// import { RESTAURANTS } from '../mock-restaurants';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
	@Input() restaurant: Restaurant;

	constructor(
		private route: ActivatedRoute,
		private restaurantService: RestaurantService,
		private location: Location
	) { }

	ngOnInit() {
		this.getRestaurant();
	}
   
	getRestaurant(): void {
	  const id = +this.route.snapshot.paramMap.get('id');
	  this.restaurantService.getRestaurant(id)
	    .subscribe(restaurant => this.restaurant = restaurant);
	}

	// Receive a number x return an array with x
	arr(size: number){
		return Array.from(Array(size), (_, i) => i);
	}

	getLatitude(){
		return this.restaurant.lat;
	}

	goBack(): void {
	    this.location.back();
	  }

}
