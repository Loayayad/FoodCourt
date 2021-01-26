import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MealAPIService } from 'src/app/Services/meal-api.service';
import { IMeal } from 'src/app/ViewModels/imeal';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  subscription: Subscription|null = null;
  MealsList: IMeal[] = [];
  constructor(private mealService:MealAPIService) { }

  ngOnInit(): void {
    this.subscription = this.mealService.getAllMeals().subscribe(
      (res)=>{
        this.MealsList = res;
      },
      (err)=>{
        console.log(err);
      }
    )
    console.log(this.MealsList);
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
