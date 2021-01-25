import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { ChefsComponent } from './Components/chefs/chefs.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { MenuComponent } from './Components/menu/menu.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { OffersComponent } from './Components/offers/offers.component';

const routes: Routes = [
  {path: 'Home', component:HomeComponent},
  {path: 'Menu', component:MenuComponent},
  {path: 'Chefs', component:ChefsComponent},
  {path: 'Offers', component:OffersComponent},
  {path: 'Cart', component:CartComponent},
  {path:'LogIn', component:LoginComponent},
  {path: '', redirectTo: '/Home', pathMatch:'full'},
  {path: "**", component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
