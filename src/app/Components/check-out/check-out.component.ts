import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

  purchasedMeals = this.cartService.getPurchasedItems();
  // mealPrices:number[]=[];
  totalPrice = this.cartService.getTotal();
  constructor(private cartService:CartService) { }

  ngOnInit(): void {



  }

}
