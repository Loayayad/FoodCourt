import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/Services/category.service';
import { MealAPIService } from 'src/app/Services/meal-api.service';
import { ICategory } from 'src/app/ViewModels/icategory';
import { IMeal } from 'src/app/ViewModels/imeal';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  subscription: Subscription|null = null;
  MealsList: IMeal[] = [];
  CategoryList: ICategory[] = [];
  SelectedCategory = 1;
  
  
  @Input() InputCategoryID:number=1;
 

  constructor(private mealService:MealAPIService,
    private cartService:CartService,
    private router:Router) { }
    
  
    ngOnInit(): void {} 
    
    addToCart(m:IMeal){
      this.cartService.addTocart(m);
      alert('Your product has been added to cart');
      
      console.log(m)
    }
  
  ngOnChanges(){
    this.mealService.getMealByCategoryID(this.InputCategoryID).subscribe(
      (response)=>{
        this.MealsList = response;
      },
      (error)=>{
        console.log(error)
      }
    )
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  viewDetails(mID:number){
    this.router.navigate(['/MealDetails',mID]);
  }
 
}
