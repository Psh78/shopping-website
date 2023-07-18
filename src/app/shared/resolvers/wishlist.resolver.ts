import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DummyData } from '../../dummyData/dummyData';

@Injectable({
    providedIn : 'root'
})

export class WishlistResolver implements Resolve<any> {

    constructor(private _dummyData : DummyData) {}

    resolve(actrSnapshot : ActivatedRouteSnapshot) : Observable<any> {
        return of(this._dummyData.wishlistGetter);
    }
}