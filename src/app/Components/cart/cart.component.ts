import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  
  
  items = this.cartService.getItems();
  
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    
  }

}
