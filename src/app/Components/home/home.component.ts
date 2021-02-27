import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Subscription } from 'rxjs';
import { HomeAPIService } from 'src/app/Services/home-api.service';

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
  constructor(private homeService:HomeAPIService) { }

  ngOnInit(): void {
    //this.getCarousel();
    this.getHomeGeneralProduct();
    this.getHomeOffers();
    this.getHomeRecommended();
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
}
