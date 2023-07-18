import { Component, OnDestroy, inject, OnInit } from '@angular/core';
import { ProductService } from '../services/products.service';
import { Products } from '../shared/models/products.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector : 'app-product-view',
    templateUrl : './productView.component.html',
    styleUrls : ['./productView.component.css']
})

export class ProductViewComponent implements OnDestroy {
    
    constructor(private _productService : ProductService, private _actr : ActivatedRoute) {
        // this.productDataSubscription$ = this._productService.productSubject.subscribe(
        //     (data : Products) => this.productData = data
        // )
        this._actr.data.subscribe(
            (data : any) => this.productData = data.productView
        )
    }

    productData !: Products;
    productDataSubscription$ !: Subscription;
    openDeliveryDropdown : boolean = false;
    deliveryAddressChecker(event : Event) {
        console.log(event);
    }

    ngOnDestroy(): void {
        // this.productDataSubscription$.unsubscribe();
    }

}