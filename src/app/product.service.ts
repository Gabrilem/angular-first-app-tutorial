// src/app/product.service.ts
import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Camiseta', price: 29.99 },
    { id: 2, name: 'Pantalón', price: 49.99 },
    { id: 3, name: 'Zapatos', price: 89.99 }
  ];

  constructor() {}

  // Devuelve todos los productos
  getProducts(): Product[] {
    return this.products;
  }

  // Devuelve un producto por id (o undefined si no existe)
  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
