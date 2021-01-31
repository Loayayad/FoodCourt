import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  totalPrice:number[]=[];
  // subTotal:number=this.totalPrice.reduce()
    subTotal:number=0;
    taxes:number=0.14;
    total:number=0;
  
  items = this.cartService.getItems();
  
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    
  }
  ngOnChanges(){
    
  }
  addMeal(count:string,price:number){
    
    this.totalPrice.push(parseInt(count)*price);
  }
   
    
  
  calcTotalPrice(){
    for(var i=0; i<this.totalPrice.length;i++)
    {
      this.subTotal+=this.totalPrice[i];
    }
    this.total = (this.taxes*this.subTotal)+this.subTotal+20;
  }
}
