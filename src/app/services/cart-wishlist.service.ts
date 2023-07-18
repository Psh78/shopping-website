import { Injectable } from '@angular/core';
import { DummyData } from '../dummyData/dummyData';

@Injectable({
    providedIn : 'root'
})

export class CartAndWishlistComponent {

    constructor(private _dummyData : DummyData) {}

    addToWishlist(item : any) : void{
        let temporaryWishlist =  [...this._dummyData.wishlistGetter, item]
        this._dummyData.wishlistSetter = Array.from(new Set(temporaryWishlist));
    }

    addToCart(item : any) : void {
        let temporaryCartList = [...this._dummyData.cartListGetter, item];
        this._dummyData.cartListSetter = temporaryCartList;
    }
}