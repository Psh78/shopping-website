import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DummyData } from 'src/app/dummyData/dummyData';

@Injectable({
    providedIn : 'root'
})

export class WishlistGuard implements CanActivate {
    
    constructor(private _dummyData : DummyData) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        // if(this._dummyData.wishlist.length > 0) 
            return true;
        // return false;
    }
}