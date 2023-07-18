import { Component } from '@angular/core';
import { DummyData } from '../dummyData/dummyData';

@Component({
    selector : 'app-header',
    templateUrl : './header.component.html',
    styleUrls : ['./header.component.css']
})

export class HeaderComponent {

    constructor(private _dummyData : DummyData) {}

    wishlist = this._dummyData.wishlistGetter;
} 