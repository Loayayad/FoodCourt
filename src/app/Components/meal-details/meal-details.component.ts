import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/Services/cart.service';
import { CategoryService } from 'src/app/Services/category.service';
import { MealAPIService } from 'src/app/Services/meal-api.service';
import { IMeal } from 'src/app/ViewModels/imeal';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.scss']
})
export class MealDetailsComponent implements OnInit {
  private subscriptionList: Subscription[]=[] ;
  meals:IMeal|null=null;
  mID:number=0;
  constructor(private activatedRoute: ActivatedRoute,
    private mService:MealAPIService,
    private location:Location,
    private cartService:CartService,
    private router:Router) { }

  ngOnInit(): void {
    let mealSubscription:Subscription|null=null;
    let routeParam:Subscription = this.activatedRoute.paramMap.subscribe((params)=>{
      let mealID:string|null = params.get('mID');
      this.mID=(mealID)? parseInt(mealID):0;

      mealSubscription = this.mService.getMealByID(this.mID).subscribe(
        (res)=>{this.meals = res},
        (err)=>{console.log(err)}
      )
      this.subscriptionList.push(mealSubscription);
    })
    this.subscriptionList.push(routeParam);
  }
  addToCart(m:IMeal|null){
    if(m!==null){
      this.cartService.addTocart(m);
    }
    
    window.alert('Your product has been added to cart')
    console.log(m)
  }
  back(){
    this.location.back();
  }

}
