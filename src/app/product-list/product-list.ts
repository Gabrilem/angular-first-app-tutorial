// src/app/product-list/product-list.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ProductAlerts } from '../product-alerts/product-alerts';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductAlerts],
  templateUrl: './product-list.html'
})
export class ProductList {
  // Tipado explícito para evitar errores de asignación
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  notifyUser() {
    window.alert('You will be notified when the product goes on sale');
  }
}
