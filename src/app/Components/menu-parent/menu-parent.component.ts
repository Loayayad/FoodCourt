import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/Services/category.service';
import { ICategory } from 'src/app/ViewModels/icategory';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-menu-parent',
  templateUrl: './menu-parent.component.html',
  styleUrls: ['./menu-parent.component.scss']
})
export class MenuParentComponent implements OnInit {
  // CategoryList: ICategory[]=[];
  // SelectedCategory: number = 1;
  // subscription: Subscription|null = null;

  // @ViewChild(MenuComponent) DetailsRef:any;
  constructor(private catService:CategoryService) { }

  ngOnInit(): void {
    // this.subscription = this.catService.getAllCategories().subscribe(
    //   (res)=>{
    //     this.CategoryList=res;
    //     console.log(this.CategoryList);
    //   },
    //   (err)=>{
    //     console.log(err);
    //   }
    // )
  }

}
