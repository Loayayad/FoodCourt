import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HomeAPIService } from 'src/app/Services/home-api.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  subscription: Subscription|null = null;
  HomeList: any[] = [];
  ListOffers: any[]=[];

  constructor(
    private homeService:HomeAPIService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.homeService.getHomeItems().subscribe(
      (res) =>{
        this.HomeList = res;
        console.log(this.HomeList)
        console.log(this.HomeList[1].offers[1].image)
      },
      (err)=>{
        console.log(err);
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
