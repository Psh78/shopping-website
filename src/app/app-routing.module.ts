import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeComponent } from './home/home.component';
import { CanActivateGuard } from './shared/guards/canactivate.guard';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishlistResolver } from './shared/resolvers/wishlist.resolver';
import { WishlistGuard } from './shared/guards/wishlist.guard';
import { CartComponent } from './cart/cart.component';
import { CartResolver } from './shared/resolvers/cart.resolver';
import { ProductViewComponent } from './productOverview/productView.component';
import { ProductViewResolver } from './shared/resolvers/productView.resolver';

const routes: Routes = [
  // { path : '', component : AuthenticationComponent },
  // { path : 'home', component : HomeComponent, canActivate : [CanActivateGuard] }
  { path : '', component : HomeComponent },
  { path : 'product-overview', component : ProductViewComponent, resolve : { productView : ProductViewResolver}},
  { path : 'wishlist', component : WishlistComponent, resolve : { wishlist : WishlistResolver}, canActivate : [WishlistGuard]},
  { path : 'cart', component : CartComponent, resolve : { cartList : CartResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
