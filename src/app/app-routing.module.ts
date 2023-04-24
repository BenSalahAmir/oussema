import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ShopComponent } from './shop/shop.component';
import { ForumComponent } from './forum/forum.component';
import { CartComponent } from './cart/cart.component';
import { FactureComponent } from './facture/facture.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { DashbordComponent } from './dashbord/dashbord.component';

const routes: Routes = [
  {path:"home",component:HomeComponentComponent},
  {path:"shop",component:ShopComponent},
  {path:"forum",component:ForumComponent},
  {path:"cart",component:CartComponent},
  {path:"bill",component:FactureComponent},
  {path:"delivery",component:DeliveryComponent},
  {path:"admin",component:DashbordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
