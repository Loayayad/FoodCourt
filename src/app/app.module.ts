import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ChefsComponent } from './Components/chefs/chefs.component';
=======
import { MenuComponent } from './Components/menu/menu.component';
import { OffersComponent } from './Components/offers/offers.component';
>>>>>>> 61db6b7d3d6c31b6c3151fb0dab2099f3141c358


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ChefsComponent
=======
    MenuComponent,
    OffersComponent
>>>>>>> 61db6b7d3d6c31b6c3151fb0dab2099f3141c358
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
