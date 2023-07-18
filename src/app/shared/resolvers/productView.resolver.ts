import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Products } from '../models/products.model';
import { ProductService } from 'src/app/services/products.service';

@Injectable({
    providedIn : 'root'
})

export class ProductViewResolver implements Resolve<Products> {

    private _productService = inject(ProductService);

    private productData !: Products;

    resolve(actr : ActivatedRouteSnapshot, state : RouterStateSnapshot) : Observable<Products> {
        this._productService.productSubject.subscribe(
            data => this.productData = data
        )
        return of(this.productData);
    }
}