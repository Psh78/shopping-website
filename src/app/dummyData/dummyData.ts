import { Injectable } from '@angular/core';

@Injectable({
    providedIn : 'root',
})

export class DummyData {

    private _workingCredentials: { email: string; password: string; } = {
        email: "psh@gmail.com",
        password: "psh123"
    };
    
    private _currentCredentials : {email : string, password : string} = {
        email : "",
        password : ""
    }

    private wishlist : object[] = [];

    private cartList : object[] = [];

    public get workingCredentials(): { email: string; password: string; } {
        return this._workingCredentials;
    }

    public set currentCredentials(value : {email : string, password : string}) {
        this._currentCredentials.email = value.email;
        this.currentCredentials.password = value.password;
    }

    public set wishlistSetter(wishlist : object[]) {
        this.wishlist = wishlist;
    }

    public get wishlistGetter() : object[] {
        return this.wishlist;
    }

    public set cartListSetter(cartList : object[]) {
        this.cartList = cartList;
    }

    public get cartListGetter() : object[] {
        return this.cartList;
    }
}