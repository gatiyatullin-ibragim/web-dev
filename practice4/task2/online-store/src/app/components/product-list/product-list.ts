import { Component, input, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  template: `
    <div class="product-grid">
        @for (p of products(); track p.id) {
          <app-product-card [product]="p"
          (remove)="onRemove($event)"></app-product-card>
        }
      </div>
  `,
  styleUrl: './product-list.css'
})
export class ProductListComponent {
  products = input.required<Product[]>();
  private productService = inject(ProductService);

  onRemove(id: number) {
    this.productService.removeProduct(id);
  }
}