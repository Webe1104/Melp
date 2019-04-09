import { Component, OnInit } from '@angular/core';

import { Restaurant } from '../restaurant';
import { RESTAURANTS } from '../mock-restaurants';
import { RestaurantService } from '../restaurant.service';


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})

export class RestaurantsComponent implements OnInit {

  restaurant = RESTAURANTS;
  // restaurant = Restaurant[];
  selectedRestaurant: Restaurant;
  onSelect(restaurant: Restaurant) : void{
  	this.selectedRestaurant = restaurant;
  }
  // constructor() { }
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants(): void {
    // this.restaurants = this.restaurantService.getRestaurants();
    this.restaurantService.getRestaurants().subscribe(restaurants => this.restaurants = restaurants)
  }
}
