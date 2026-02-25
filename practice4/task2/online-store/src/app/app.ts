import { Component, inject, signal, computed } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list';
import { ProductService } from './services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  productService = inject(ProductService);

  categories = this.productService.getCategories();
  selectedCategoryId = signal<number | null>(null);

  filteredProducts = computed(() => {
    const id = this.selectedCategoryId();
    
    return this.productService.products().filter((p: any) => p.categoryId === id);
  });

  selectCategory(id: number) {
    this.selectedCategoryId.set(id);
  }
}