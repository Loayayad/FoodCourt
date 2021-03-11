import { ThrowStmt } from '@angular/compiler';
import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnChanges {

  totalPrice:number[]=[];
  subTotal:number=0;
  taxes:number=0;
  total:number=0;
  shipping:number=0;
  priceAfterDiscount:number = 0;

  //getting the selected meals into the cart
  items = this.cartService.getItems();
  isUserlogged:string|null=localStorage.getItem('user');
  

  constructor(private cartService:CartService) { }
  ngOnChanges(changes: SimpleChanges): void {
    for(var i=0; i<this.items.length; i++)
    {
      this.subTotal += this.totalPrice[i] ;
    }
    this.taxes=Number((14*this.subTotal/100).toFixed(2));
    this.total = this.taxes+this.subTotal+20;

    
  }

  moveToCheckout(){   
    this.cartService.setTotal(this.total)
    this.items.forEach(i => {
      this.cartService.moveToCheckOut(i.mealName, i.mealCount, i.mealPrice, i.mealDiscount)
    });
    
  }

  //Automatically caculating the price when the page is loaded.
  ngOnInit(): void {
     
      for(var i=0; i<this.items.length; i++)
      {
        //If the discount is activated
        if(this.items[i].mealShow){
          let percentage = this.items[i].mealDiscount.substring(0,2);
          this.priceAfterDiscount = this.items[i].mealPrice - (parseInt(percentage) * this.items[i].mealPrice/100);
          this.totalPrice.push(this.items[i].mealCount*this.priceAfterDiscount);
          this.subTotal += this.totalPrice[i] ;
          
        }
        //If the discount is not activated
        else {
          this.totalPrice.push(this.items[i].mealCount*this.items[i].mealPrice);
          this.subTotal += this.totalPrice[i] ;
          
        }
        this.shipping=10;
      }
    
    this.taxes=Number((14*this.subTotal/100).toFixed(2));
    this.total = this.taxes+this.subTotal+this.shipping;
    this.total.toFixed(2);
  }
  remove(index:number){
    
    this.items.splice(index, 1);
    this.subTotal -= this.totalPrice[index];
    if(this.subTotal == 0)
    {
      this.total = 0;
      this.taxes = 0;
      this.shipping = 0;
    }
    else{
      this.taxes = Number((14*this.subTotal/100).toFixed(2));
      this.total = this.taxes+this.subTotal+10;
      this.totalPrice.splice(index, 1);
      this.total.toFixed(2);
    }
    
  }
}
