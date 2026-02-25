import { Component, input, output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCardComponent {

  product = input.required<Product>();
  remove = output<number>();

  like(){
    this.product().likes++;
  }

  delete(){
      this.remove.emit(this.product().id);
  }

  share(platform: string) {
    const url = encodeURIComponent(this.product().link);
    const text = encodeURIComponent(this.product().name);
    
    if (platform === 'wa') {
      window.open(`https://wa.me/?text=Check out this: ${url}`, '_blank');
    } else if (platform === 'tg') {
      window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
    }
  }
}