import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductList],
  template: `
    <h1>Bienvenido a nuestra tienda</h1>
    <app-product-list></app-product-list>
  `
})
export class Home {}
