import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { products } from '../products';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule,   // 👈 Necesario para *ngIf, *ngFor, etc.
    CurrencyPipe    // 👈 Necesario para | currency
  ],
  templateUrl: './product-detail.html'
})
export class ProductDetail {
  product: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get('productId'));
    this.product = products.find(product => product.id === productId);
  }
}

