import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChefsComponent } from './Components/chefs/chefs.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './Components/menu/menu.component';
import { OffersComponent } from './Components/offers/offers.component';
import { CartComponent } from './Components/cart/cart.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { LoginComponent } from './Components/login/login.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CheckOutComponent } from './Components/check-out/check-out.component';
import { ChefProfileComponent } from './Components/chef-profile/chef-profile.component';
import { MenuParentComponent } from './Components/menu-parent/menu-parent.component';
import { MealDetailsComponent } from './Components/meal-details/meal-details.component';
import { SignupComponent } from './Components/signup/signup.component';
import { BlogComponent } from './Components/blog/blog.component';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChefDishesComponent } from './Components/chef-dishes/chef-dishes.component';
=======
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './Components/admin/admin.component';
>>>>>>> 24f624ef6f913259b4c925ff80215fd753af526f


@NgModule({
  declarations: [
    AppComponent,
    ChefsComponent,
    MenuComponent,
    OffersComponent,
    CartComponent,
    OffersComponent,
    HeaderComponent,
    HomeComponent,
    NotfoundComponent,
    LoginComponent,
    FooterComponent,
    CheckOutComponent,
    ChefProfileComponent,
    MenuParentComponent,
    MealDetailsComponent,
    SignupComponent,
    BlogComponent,
<<<<<<< HEAD
    ChefDishesComponent
=======
    AdminComponent
>>>>>>> 24f624ef6f913259b4c925ff80215fd753af526f
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
