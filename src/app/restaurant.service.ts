import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Restaurant } from '../restaurant';
import { RESTAURANTS } from './mock-restaurants';

@Injectable(({providedIn:'root'}))

export class RestaurantService {

  constructor() { }

  getRestaurants(): Observable<Restaurant[]> {
  	return of(RESTAURANTS);
  }

  getRestaurant(id: number): Observable<Restaurant[]> {
    return of(RESTAURANTS.find(restaurant => restaurant.id === id ));
  }
}
