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
  // restaurant: Restaurant[];
  // restaurant: Restaurant[] = new Array<Restaurant>();
   

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.getRestaurantsByProp('name');
  }

  getRestaurantsByProp(prop: string): void {
    this.restaurantService.getRestaurants()
      .subscribe(restaurants => this.restaurants = restaurants.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1))
  }
}
