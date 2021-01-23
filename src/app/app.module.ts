import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ChefsComponent } from './Components/chefs/chefs.component';
=======
import { MenuComponent } from './Components/menu/menu.component';
import { OffersComponent } from './Components/offers/offers.component';
<<<<<<< HEAD
import { CartComponent } from './Components/cart/cart.component';
=======
>>>>>>> 61db6b7d3d6c31b6c3151fb0dab2099f3141c358
>>>>>>> d845eb7a3c59a27d4fcf38c3805c167a332317bf


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ChefsComponent
=======
    MenuComponent,
<<<<<<< HEAD
    OffersComponent,
    CartComponent
=======
    OffersComponent
>>>>>>> 61db6b7d3d6c31b6c3151fb0dab2099f3141c358
>>>>>>> d845eb7a3c59a27d4fcf38c3805c167a332317bf
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
