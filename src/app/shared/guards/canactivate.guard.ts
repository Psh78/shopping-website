import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DummyData } from '../../dummyData/dummyData';

@Injectable({
    providedIn : 'root'
})

export class CanActivateGuard implements CanActivate {
    
    constructor(private _dummyData : DummyData) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let currentUser = JSON.stringify(this._dummyData.workingCredentials);
        let workingUser = JSON.stringify(this._dummyData.workingCredentials);
        
        if(currentUser === workingUser) {
            return true;
        }
        else {
            return false;
        }

    }
}