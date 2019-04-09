import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';

import { RESTAURANTS } from '../mock-restaurants';


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})

export class RestaurantsComponent implements OnInit {

  restaurant = RESTAURANTS;
  selectedRestaurant: Restaurant;
  onSelect(restaurant: Restaurant) : void{
  	this.selectedRestaurant = restaurant;
  }
  constructor() { }

  ngOnInit() {
  }

}
