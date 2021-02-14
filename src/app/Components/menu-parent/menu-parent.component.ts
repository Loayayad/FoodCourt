import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { element } from 'protractor';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/Services/category.service';
import { ICategory } from 'src/app/ViewModels/icategory';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-menu-parent',
  templateUrl: './menu-parent.component.html',
  styleUrls: ['./menu-parent.component.scss']
})
export class MenuParentComponent implements OnInit{
  CategoryList: any[]=[];
  SelectedCategory: number = 1;

  
  @ViewChild(MenuComponent) DetailsRef:any;
  subscription:Subscription|null = null;
  constructor(private catService:CategoryService) { }

  ngOnInit(): void {
    // this.subscription = this.catService.getAllCategories().subscribe(
    //   (res)=>{
    //     console.log(res);
    //     res.forEach((element)=>{
    //       console.log(element.payload.doc.data());
    //       this.CategoryList.push(element.payload.doc.data())
    //     })
    //     //this.CategoryList=res;
    //     console.log(this.CategoryList);
    //   },
    //   (err)=>{
    //     console.log(err);
    //   }
    // )
  }
  
}
