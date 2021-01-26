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
    CheckOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
