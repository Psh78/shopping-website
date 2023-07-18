import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { DummyData } from '../dummyData/dummyData';
import { Products } from '../shared/models/products.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlertService } from '../services/alerts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  constructor(private _actr : ActivatedRoute) {

    this.cartSubscription$ = this._actr.data.subscribe((respone : any) => {
      this.cartListData = respone?.cartList;
    })
  }

  alertService = inject(AlertService)

  productQuantity : number = 1;
  cartListData !: Products[];
  cartSubscription$ !: Subscription;
  cartMap : Map<Products, number> = new Map<Products, number>;
  cartObject !: object;
  totalPrice !: number;
  discount : number = -1;
  securedPackingFee : number = 99;

  ngOnInit(): void {
    console.log(this.cartListData);
    for(let i of this.cartListData) {
      if(this.cartMap.has(i)) {
        let val = this.cartMap.get(i);
        if(val && val < 10) {
          this.cartMap.set(i, ++val);
        }
      }
      else {
        this.cartMap.set(i , 1)
      }
    }
    console.log(this.cartMap);
    this.totalPriceCalculator();
  }

  ngOnDestroy(): void {
    this.cartSubscription$.unsubscribe();
  }

  getProductKeys() : Products[] {
    return Array.from(this.cartMap.keys());
  }

  getProductValue(product : Products) : number {
    let val = this.cartMap.get(product);
    return val ?? 0;
  }

  changeQuantity(product : Products, quantity : number) : void {
    if(quantity === 0 || quantity === 11)
      return
    else 
      this.cartMap.set(product, quantity);
    this.totalPriceCalculator();
  }

  quantityInputValidator(event : KeyboardEvent) : boolean {
    let input = event.key.charCodeAt(0);
    if(input >= 48 && input < 58)
      return true;
    else {
      event.preventDefault();
      return false;
    }
  }

  quantityValidator(product : Products, element : HTMLInputElement) {
    let val = +element.value;
    if(val > 10) {
      val = 10;
      element.value = String(val);
      this.alertService.quantityExceededAlert();
    }
    else if(val < 1) {
      val = 1;
      element.value = String(val);
      this.alertService.quantityExceededAlert();
    }
  }

  totalPriceCalculator() {
    let price : number = 0;

    for(let [key, value] of this.cartMap.entries()) {
      price += key.price * value;
    }
    this.totalPrice = price;
  }
}
