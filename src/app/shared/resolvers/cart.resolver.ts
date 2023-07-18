import { Injectable, Inject, inject } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DummyData } from 'src/app/dummyData/dummyData';

@Injectable({
    providedIn : 'root'
})

export class CartResolver implements Resolve<any> {

    private _dummyData = inject(DummyData);
    
    resolve(actr : ActivatedRouteSnapshot, state : RouterStateSnapshot) : Observable<any> {
        return of(this._dummyData.cartListGetter);
    }
}