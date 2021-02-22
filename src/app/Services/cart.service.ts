import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMeal } from '../ViewModels/imeal';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: {mealImage:string,mealID:number, mealName:string, mealPrice:number, mealCount:number}[]=[];


  addTocart(mealImage:string,mealID:number, mealName:string, mealPrice:number, mealCount:number){
     this.items.push({mealImage,mealID,mealName,mealPrice,mealCount});
  }

  getItems(){
    return this.items

  }

  clearCart() {
    this.items = [];
    return this.items
  }
}
