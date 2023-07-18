import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../shared/models/products.model';
import { DummyData } from '../dummyData/dummyData';
import { CartAndWishlistComponent } from '../services/cart-wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private _activatedRoute : ActivatedRoute, private _dummyData : DummyData, private _cartAndWishlistService : CartAndWishlistComponent) { }

  wishlistData !: Products[];
  cartList !: object[];

  ngOnInit(): void {
    this._activatedRoute.data.subscribe((response : any) => {
      this.wishlistData  = Array.from(new Set<Products>(response?.wishlist));
    })

    this.cartList = this._dummyData.cartListGetter;
  }

  addToCartList(event : Products) : void {
    this._cartAndWishlistService.addToCart(event);
  }
}
