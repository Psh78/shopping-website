import { Component, ElementRef, OnInit, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';

import { ProductService } from '../services/products.service';
import { CartAndWishlistComponent } from '../services/cart-wishlist.service';
import { Products } from '../shared/models/products.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private _productService : ProductService, private _renderer : Renderer2, private _elementRef : ElementRef, private _wishlist : CartAndWishlistComponent  ) { }

  products !: Products[];
  user = 'osd';
  items !: HTMLElement[];
  intervalRef !: any;
  corouselNext !: HTMLButtonElement;
  loading : boolean = false;
  sub !: any;
  ngOnInit(): void {
    this.loading = true;
    this._productService.getProducts()
      .subscribe(
        (data) => {
          this.products = data
          console.log(this.products)
          this.loading = false;
        } 
      );
  }
    
  ngAfterViewInit(): void {    
    this.items = this._elementRef.nativeElement.querySelectorAll('.carousel-item');
    this.corouselNext = this._elementRef.nativeElement.querySelector('.carousel-control-next-icon');
    this.rotateCorousel();
  }

  rotateCorousel() {
    this.intervalRef = setInterval(() => {
      this.corouselNext.click();
    }, 3500); 
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalRef);
  }

  addToWishlist(event : Products) {
    this._wishlist.addToWishlist(event);
  }

  addToCart(event : Products) {
    this._wishlist.addToCart(event);
  }
  
  gotoProductView(product : Products) {
    this._productService.productSubject.next(product);
  }

}
