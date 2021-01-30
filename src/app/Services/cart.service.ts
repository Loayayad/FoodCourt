import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMeal } from '../ViewModels/imeal';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: IMeal[]=[];
  
  addTocart(meal:IMeal){
    this.items.push(meal);
  }

  getItems(){
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
