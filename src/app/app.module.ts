import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NavbarComponentComponent } from './shared/navbar-component/navbar-component.component';
import { SidebarComponentComponent } from './shared/sidebar-component/sidebar-component.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ShopComponent } from './shop/shop.component';
import { ForumComponent } from './forum/forum.component';
import { FactureComponent } from './facture/facture.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { CartComponent } from './cart/cart.component';
import { DashbordComponent } from './dashbord/dashbord.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    NavbarComponentComponent,
    SidebarComponentComponent,
    FooterComponent,
    ShopComponent,
    ForumComponent,
    FactureComponent,
    DeliveryComponent,
    CartComponent,
    DashbordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
