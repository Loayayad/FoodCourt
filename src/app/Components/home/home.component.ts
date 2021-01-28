import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeAPIService } from 'src/app/Services/home-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  subscription: Subscription|null = null;
  HomeList: any[] = [];

  constructor(private homeService:HomeAPIService) { }

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

}
