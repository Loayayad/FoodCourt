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
  meals:any;
  mID:number=0;
  starRating=0;
  count:number=1;
  constructor(private activatedRoute: ActivatedRoute,
    private mService:MealAPIService,
    private location:Location,
    private cartService:CartService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.getMealByID();
  }


  getMealByID(){
    let mealSubscription:Subscription|null=null;
    let routeParam:Subscription = this.activatedRoute.paramMap.subscribe((params)=>{
      let mealID:string|null = params.get('mID');
      this.mID=(mealID)? parseInt(mealID):0;

      mealSubscription = this.mService.getMealByID(this.mID).subscribe(
        (res)=>{
          res.forEach((element)=>{
            console.log(element.payload.doc.data());
            this.meals = element.payload.doc.data()
          })},
        (err)=>{console.log(err)}
      )
      this.subscriptionList.push(mealSubscription);
    })
    this.subscriptionList.push(routeParam);
  }

  
  addToCart(count:string){
    if(this.meals)
    {
      this.cartService.addTocart(this.meals.image,this.meals.id,this.meals.name,this.meals.price,this.meals.show,this.meals.discount,parseInt(count));
    }
    
  }
  back(){
    this.location.back();
  }

}
