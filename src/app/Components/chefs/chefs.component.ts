import { Component, OnInit } from '@angular/core';
import {Router}from '@angular/router';
import {ChefService} from 'src/app/Services/chef.service';

import {Subscription} from 'rxjs';


@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.scss'],
  
})
export class ChefsComponent implements OnInit {
   name:String="";
   ChefList:any[]=[];
   subscription: Subscription|null=null;
   chefID:number=0;
   ChefItems: any;
   chefIndex:number=6;
  constructor(
    private router:Router,
    private chefServiceApi:ChefService,

  ) { }
  
  ngOnInit(): void {
    this.getAllChefs();
    this.getChefItems();
  }

  getChefItems(){
    this.chefServiceApi.getChefItems().subscribe(
      (res)=>{
        this.ChefItems=res.payload.data();
      },(err)=>{
        console.log(err);
      }
    )
  }
  getAllChefs(){
    this.chefServiceApi.getAllChefs(this.chefIndex).subscribe(
          (res) =>{
            this.ChefList=[];
            console.log(res);
            res.forEach((element)=>{
              // console.log(element.payload.doc.data());
              this.ChefList.push(element.payload.doc.data())
            })
    
            this.ChefList.forEach((element)=>{
              console.log(element);
            })
          },
          (err)=>{
            console.log(err);
          }
        )
    

  }
  nextIndex(){
    this.chefIndex+=6;
    this.getAllChefs();
  }
  viewChef(ChefID:number){
   
    this.router.navigate(['/Profile',ChefID])
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  Search(){
    if(this.name!=""){
      this.ChefList=this.ChefList.filter(res=>{
        return res.name.toLowerCase().match(this.name.toLowerCase());
      })
    }
    else if(this.name===""){

      this.ngOnInit();
    }

  }
  
}
