import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './Components/blog/blog.component';
import { CartComponent } from './Components/cart/cart.component';
import { CheckOutComponent } from './Components/check-out/check-out.component';
import { ChefDishesComponent } from './Components/chef-dishes/chef-dishes.component';
import { ChefProfileComponent } from './Components/chef-profile/chef-profile.component';
import { ChefsComponent } from './Components/chefs/chefs.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MealDetailsComponent } from './Components/meal-details/meal-details.component';
import { MenuParentComponent } from './Components/menu-parent/menu-parent.component';
import { MenuComponent } from './Components/menu/menu.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { OffersComponent } from './Components/offers/offers.component';
import { SignupComponent } from './Components/signup/signup.component';

const routes: Routes = [
  {path: 'Home', component:HomeComponent},
  {path: 'MenuParent', component:MenuParentComponent},
  {path: 'Menu', component:MenuComponent},
  {path: 'Chefs', component:ChefsComponent},
  {path: 'Offers', component:OffersComponent},
  {path: 'Cart', component:CartComponent},
  {path:'LogIn', component:LoginComponent},
  {path:'Signup', component:SignupComponent},
  {path:'Blog', component:BlogComponent},
  {path:'Checkout', component:CheckOutComponent},
  {path:'Profile/:cID',component:ChefProfileComponent},
  {path:'Dishes/:cID',component:ChefDishesComponent},
  {path:'MealDetails/:mID', component:MealDetailsComponent},
  {path: '', redirectTo: '/Home', pathMatch:'full'},
  {path: "**", component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
