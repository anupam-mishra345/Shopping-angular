import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LandingComponent } from './landing/landing.component';
import { ListingComponent } from './listing/listing.component';

const routes: Routes = [

  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path:'home',component:ListingComponent},
  {path:'landing/:id',component:LandingComponent},
  {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
