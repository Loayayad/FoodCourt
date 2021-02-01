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
    taxes:number=0.14;
    total:number=0;
  
  items = this.cartService.getItems();

  constructor(private cartService:CartService) { }
  ngOnChanges(changes: SimpleChanges): void {
    for(var i=0; i<this.items.length; i++)
    {
      
      this.subTotal += this.totalPrice[i] ;
    }
    this.total = (this.taxes*this.subTotal)+this.subTotal+20;
    
  }
  
  ngOnInit(): void {
    for(var i=0; i<this.items.length; i++)
    {
      this.totalPrice.push(this.items[i].mealCount*this.items[i].mealPrice);
      this.subTotal += this.totalPrice[i] ;
    }
    this.total = (this.taxes*this.subTotal)+this.subTotal+20;
  }
  remove(index:number){
    this.items.splice(index, 1);
    this.subTotal -= this.totalPrice[index];
    this.total = (this.taxes*this.subTotal)+this.subTotal+20;
    this.totalPrice.splice(index, 1);
  }

  clear(){
    this.items = this.cartService.clearCart()
    this.totalPrice=[];
    this.subTotal=0;
    this.total=0;
  }
}
