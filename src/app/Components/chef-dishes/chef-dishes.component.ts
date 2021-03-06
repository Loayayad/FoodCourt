import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MealAPIService } from 'src/app/Services/meal-api.service';
import { IMeal } from 'src/app/ViewModels/imeal';
@Component({
  selector: 'app-chef-dishes',
  templateUrl: './chef-dishes.component.html',
  styleUrls: ['./chef-dishes.component.scss']
})
export class ChefDishesComponent implements OnInit {
  private subscriptionList: Subscription[]=[] ;
  meals:any[]=[];
  cID:number=0;

  @Input() InputChefID:number=1;
  constructor(private activatedRoute: ActivatedRoute,
    private mService:MealAPIService,
    private location:Location,
    private router:Router) { 
      
    }
    
  ngOnInit(): void {
  
  }
  ngOnChanges(){
   
    this.getMealByChefID();
  }
  getMealByChefID(){
    
    this.mService.getMealByChefID(this.InputChefID).subscribe(
      
      (res) =>{
        //console.log(res);
        this.meals=[];
        res.forEach((element)=>{
          //console.log(element.payload.doc.data());
          this.meals.push(element.payload.doc.data())
        })

        this.meals.forEach((element)=>{
          console.log(element);
        })
      },
      (err)=>{
        console.log(err);
      }
    )
  }
  viewDetails(mID:number){
    
    this.router.navigate(['/MealDetails',mID]);
  }
}

  

