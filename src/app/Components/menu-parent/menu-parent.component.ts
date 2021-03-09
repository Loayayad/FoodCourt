import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/Services/category.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-menu-parent',
  templateUrl: './menu-parent.component.html',
  styleUrls: ['./menu-parent.component.scss']
})
export class MenuParentComponent implements OnInit{
  CategoryList: any[]=[];
  SelectedCategory: number = 1;

  //For accessing the child component to send the category id to it.
  @ViewChild(MenuComponent) DetailsRef:any;
  subscription:Subscription|null = null;

  constructor(
    private catService:CategoryService
    ) { }

  //Changing the selected category when the button is clicked.
  setCatID(id:number): void {
    this.SelectedCategory = id;
  }

  ngOnInit(): void {
    this.getAllCategories();
  }

  //Filling the button values from the data base.
  getAllCategories(){
    this.CategoryList.forEach(()=>{
        var x = this.CategoryList.pop();
        console.log(x);

    })
    this.subscription = this.catService.getAllCategories().subscribe(
      (res)=>{
        console.log(res.length);
        for (let i = 0; i < res.length; i++) {
          console.log(res[i].payload.doc.data().id);
          if(!this.CategoryList.includes(res[i].payload.doc.data().id))
          console.log(this.CategoryList.includes(res[i].payload.doc.data().id));
          this.CategoryList.push(res[i].payload.doc.data())
        }
        
        console.log(this.CategoryList);
      },
      (err)=>{
        console.log(err);
      }
    )
  }
  
}
