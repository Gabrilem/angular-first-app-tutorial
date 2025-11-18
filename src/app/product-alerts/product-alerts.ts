import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-alerts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-alerts.html',
  styleUrls: ['./product-alerts.css']
})
export class ProductAlerts {

  @Input() product!: Product;
  @Output() notify = new EventEmitter<void>();

}
