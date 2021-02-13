import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  
  mID:number=0;
  selectedMeal: {mealImage:string, mealID:number, mealName:string, mealPrice:number, mealDescription:string}=
  {
    mealImage:'',
    mealID:0,
    mealDescription:'',
    mealName:'',
    mealPrice:0
  };
  
  @Input() InputCategoryID:number=1;
 

  constructor(private mealService:MealAPIService,
    private cartService:CartService,
    private router:Router) { }
    
  
    ngOnInit(): void {} 
    addToCart(mealCount:string){
      this.cartService.addTocart(this.selectedMeal.mealImage,
        this.selectedMeal.mealID,
        this.selectedMeal.mealName,
        this.selectedMeal.mealPrice,
        parseInt(mealCount))
    }
    // addToCart(mealImage:string, mealID:number, mealName:string, mealPrice:number, mealCount:string){
    //   this.cartService.addTocart(mealImage,mealID,mealName,mealPrice,parseInt(mealCount));
      
    // }
  
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
  add(mealImage:string, mealID:number, mealName:string, mealPrice:number, mealDescription:string){
    if(this.selectedMeal)
    {
      this.selectedMeal.mealImage = mealImage;
      this.selectedMeal.mealID = mealID;
      this.selectedMeal.mealName = mealName;
      this.selectedMeal.mealPrice = mealPrice;
      this.selectedMeal.mealDescription = mealDescription;
    }  
    

  }
}
