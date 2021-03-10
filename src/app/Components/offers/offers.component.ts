import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HomeAPIService } from 'src/app/Services/home-api.service';
import { OfferService } from 'src/app/Services/offer.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  subscription: Subscription|null = null;
  ListOffers: any[]=[];
  offerIndex:number=6;
  

  constructor(
    private offerService:OfferService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.getOffers();
  }

  getOffers(){
    localStorage.setItem("filter","");
    this.offerService.getOffers(this.offerIndex).subscribe(
      (res)=>{
        this.ListOffers=[];
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

  getOffersOrderByName(){
    localStorage.setItem("filter","name");
    this.offerService.getOffersOrderByName(this.offerIndex).subscribe(
      (res)=>{
        this.ListOffers=[];
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

  getOffersOrderByPrice(){
    localStorage.setItem("filter","price");
    this.offerService.getOffersOrderByPrice(this.offerIndex).subscribe(
      (res)=>{
        this.ListOffers=[];
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

  getOffersOrderByPriceDesc(){
    localStorage.setItem("filter","priceDesc");
    this.offerService.getOffersOrderByPriceDesc(this.offerIndex).subscribe(
      (res)=>{
        this.ListOffers=[];
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
  
  getOffersOrderByDiscount(){
    localStorage.setItem("filter","discount");
    this.offerService.getOffersOrderByDiscount(this.offerIndex).subscribe(
      (res)=>{
        this.ListOffers=[];
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

  getOffersOrderByDiscountDesc(){
    localStorage.setItem("filter","discountDesc");
    this.offerService.getOffersOrderByDiscountDesc(this.offerIndex).subscribe(
      (res)=>{
        this.ListOffers=[];
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

  
  nextIndex(){
    this.offerIndex+=6;
    if(localStorage.getItem("filter")==="name"){
      this.getOffersOrderByName();
    }else if(localStorage.getItem("filter")==="price"){
      this.getOffersOrderByPrice();
    }else if(localStorage.getItem("filter")==="priceDesc"){
      this.getOffersOrderByPriceDesc();
    }else if(localStorage.getItem("filter")==="discount"){
      this.getOffersOrderByDiscount();
    }else if(localStorage.getItem("filter")==="discountDesc"){
      this.getOffersOrderByDiscountDesc();
    }
    else{
      this.getOffers();
    }
    
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    localStorage.removeItem("filter");
  }
  viewDetails(mID:number){
    this.router.navigate(['/MealDetails',mID]);
  }

}
