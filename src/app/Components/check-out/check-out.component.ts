import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

  purchasedMeals = this.cartService.getPurchasedItems();


  userID = localStorage.getItem('user');
  totalPrice = this.cartService.getTotal();
  options ='';
  orders:{meals:[], userID:string}[]=[] ;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('user'));
  }

  sendOrder(){
    if(localStorage.getItem('user') !== null)
    {
      this.cartService.postOrders(this.purchasedMeals, localStorage.getItem('user'))
    }
    console.log(this.cartService.getOrders())
  }
}
