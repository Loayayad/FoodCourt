import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/Services/category.service';
import { MealAPIService } from 'src/app/Services/meal-api.service';
import { ICategory } from 'src/app/ViewModels/icategory';
import { IMeal } from 'src/app/ViewModels/imeal';

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
  constructor(private mealService:MealAPIService,
    private catService:CategoryService,
    private router:Router) { }
  // @Input() InputCategoryID:number=1;
  ngOnInit(): void {
    this.mealService.getAllMeals().subscribe(
      (res)=>{
        this.MealsList = res;
      },
      (err)=>{
        console.log(err);
      }
    )
    console.log(this.MealsList);
    console.log(this.SelectedCategory);
    this.subscription = this.catService.getAllCategories().subscribe(
      (res)=>{
        this.CategoryList=res;
        console.log(this.CategoryList);
      },
      (err)=>{
        console.log(err);
      })
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
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  viewDetails(mID:number){
    this.router.navigate(['/MealDetails',mID]);
  }
}
