import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { Subscription } from 'rxjs';
import { HomeAPIService } from 'src/app/Services/home-api.service';
import { IUser } from 'src/app/ViewModels/iuser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  subscription: Subscription|null = null;
  ListOffers: any[]=[];
  ListRecommended: any[]=[];
  HomeItems: any;
  mID:number=0;
  user: any;
  constructor(
    private homeService:HomeAPIService,
    private router:Router
    ) { }

  ngOnInit(): void {
    //this.getCarousel();
    this.getHomeGeneralProduct();
    this.getHomeOffers();
    this.getHomeRecommended();
    
    
    if(localStorage.getItem('user')!=null)
    {
      this.user = 'Welcome back friend :)' ; 
    }
    else {
      this.user = "Have a look around, we'll be happy if you join us :)"
    }
  }

  getHomeGeneralProduct(){
    this.homeService.getHomeItems().subscribe(
      (res)=>{
        this.HomeItems=res.payload.data();
      },(err)=>{
        console.log(err);
      }
    )
  }

  getHomeOffers(){
    this.homeService.getHomeOffer().subscribe(
      (res)=>{

        res.forEach((element)=>{
          //console.log(element.payload.doc.data());
          this.ListOffers.push(element.payload.doc.data());
        })
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  getHomeRecommended(){
    this.homeService.getHomeRecommended().subscribe(
      (res)=>{

        res.forEach((element)=>{
          //console.log(element.payload.doc.data());
          this.ListRecommended.push(element.payload.doc.data());
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
