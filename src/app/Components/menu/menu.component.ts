import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/Services/category.service';
import { MealAPIService } from 'src/app/Services/meal-api.service';
import { ICategory } from 'src/app/ViewModels/icategory';
import { IMeal } from 'src/app/ViewModels/imeal';
import { CartService } from 'src/app/Services/cart.service';
import { element } from 'protractor';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  subscription: Subscription|null = null;
  MealsList: any[] = [];
  CategoryList: ICategory[] = [];
  SelectedCategory = 1;
  AllMeals: any[]=[];
  
  
  @Input() InputCategoryID:number=1;
 

  constructor(private mealService:MealAPIService,
    private cartService:CartService,
    private router:Router) { }
    
  
    ngOnInit(): void {} 
    
    addToCart(mealImage:string, mealID:number, mealName:string, mealPrice:number, mealCount:string){
      this.cartService.addTocart(mealImage,mealID,mealName,mealPrice,parseInt(mealCount));
      alert('Your product has been added to cart');
    }
  
  ngOnChanges(){
    // this.mealService.getMealByCategoryID(this.InputCategoryID).subscribe(
    //   (response)=>{
    //     this.MealsList = response;
    //   },
    //   (error)=>{
    //     console.log(error)
    //   }
    // )
    //this.getAllMeals();
    //this.getMealbyCatID();
  }

  // getAllMeals(){
  //   this.mealService.getAllMeals().subscribe(
  //     (res) =>{
  //       //console.log(res);
  //       res.forEach((element)=>{
  //         //console.log(element.payload.doc.data());
  //         this.AllMeals.push(element.payload.doc.data())
  //       })

  //       this.AllMeals.forEach((element)=>{
  //         console.log(element);
  //       })
  //     },
  //     (err)=>{
  //       console.log(err);
  //     }
  //   )

  // }

  // getMealbyCatID(){
  //   this.mealService.getMealByCategoryID(this.SelectedCategory).subscribe(
  //     (res) =>{
  //       //console.log(res);
  //       res.forEach((element)=>{
  //         //console.log(element.payload.doc.data());
  //         this.MealsList.push(element.payload.doc.data())
  //       })

  //       this.MealsList.forEach((element)=>{
  //         console.log(element);
  //       })
  //     },
  //     (err)=>{
  //       console.log(err);
  //     }
  //   )
  // }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  viewDetails(mID:number){
    this.router.navigate(['/MealDetails',mID]);
  }
 
}
