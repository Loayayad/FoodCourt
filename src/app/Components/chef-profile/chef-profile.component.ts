import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IChefs } from 'src/app/ViewModels/ichefs';
import {Location} from '@angular/common';
import { Subscription } from 'rxjs';
import { ChefService } from 'src/app/Services/chef.service';


@Component({
  selector: 'app-chef-profile',
  templateUrl: './chef-profile.component.html',
  styleUrls: ['./chef-profile.component.scss']
})
export class ChefProfileComponent implements OnInit {
  chef:IChefs|null=null;
  chefID:number=0;
     private subscriptionList: Subscription[] = [];
  constructor(private router:Router, private location:Location,
    private chefService:ChefService,private activatedRout:ActivatedRoute
    ) { }

  ngOnInit(): void {
    let chefSubscription:Subscription|null=null;
    let routeParamSubscription: Subscription=
    this.activatedRout.paramMap.subscribe((params)=>{
      let chefIDParam:string|null=params.get('cID');
      this.chefID=(chefIDParam)? parseInt(chefIDParam):0;
      chefSubscription=this.chefService.getChefsByID(this.chefID).subscribe(
        (res)=>{
          this.chef=res;
        },
        (err)=>{console.log(err)}
      )
      this.subscriptionList.push(chefSubscription);
     console.log(this.chefID)
     console.log( this.chef)
     });
     this.subscriptionList.push(routeParamSubscription);
    }
    
  }


