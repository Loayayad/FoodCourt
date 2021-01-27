import { Component, OnInit } from '@angular/core';
import {Router}from '@angular/router';
import {ChefService} from 'src/app/Services/chef.service';
import {IChefs} from 'src/app/ViewModels/ichefs';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.scss']
})
export class ChefsComponent implements OnInit {
   ChefList:IChefs[]=[];
   subscription: Subscription|null=null;
  constructor(
    private router:Router,
    private chefServiceApi:ChefService,
  ) { }
  
  ngOnInit(): void {
    this.subscription= this.chefServiceApi.getAllChefs().subscribe(
      (response)=>{
        this.ChefList = response;
      },
      (err)=>{console.log(err)}
    );

  }
  viewChef(ChefID:number|undefined){
    this.router.navigate(['/Profile',ChefID])
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
