import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Смартфон Apple iPhone 17 Pro 256Gb оранжевый',
      description: 'Стильный смартфон с мощным процессором и отличной камерой.',
      price: 1,
      rating: 5,
      image: '/home/patrik/web-development/web-dev/practice4/task2/online-store/src/app/components/product-list/image.png',
      images: ['url1', 'url2', 'url3'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'
    },
    {
      id: 2,
      name: 'Смартфон Apple iPhone 13 128Gb черный',
      description: 'Стильный смартфон с мощным процессором и отличной камерой.',
      price: 2,
      rating: 5,
      image: '',
      images: ['url1', 'url2', 'url3'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },
    {
      id: 3,
      name: 'Смартфон Apple iPhone 17 Pro 256Gb черный',
      description: 'Стильный смартфон с мощным процессором и отличной камерой.',
      price: 20000000,
      rating: 5,
      image: '',
      images: ['url1', 'url2', 'url3'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-temno-sinii-145438959/?c=750000000'
    },
    {
      id: 4,
      name: 'Смартфон Apple iPhone 16 128Gb черный',
      description: 'Стильный смартфон с мощным процессором и отличной камерой.',
      price: 2380472,
      rating: 4,
      image: '',
      images: ['url1', 'url2', 'url3'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000'
    },
    {
      id: 5,
      name: 'Смартфон Redmi A3x черный',
      description: 'Стильный смартфон с мощным процессором и отличной камерой.',
      price: 77777777,
      rating: 4,
      image: '',
      images: ['url1', 'url2', 'url3'],
      link: 'https://kaspi.kz/shop/p/redmi-a3x-3-gb-64-gb-chernyi-121654928/?c=750000000'
    },
    {
      id: 6,
      name: 'Смартфон Samsung Galaxy A16 8 ГБ/256 ГБ серый',
      description: 'Стильный смартфон с мощным процессором и отличной камерой.',
      price: 67,
      rating: 4,
      image: '',
      images: ['url1', 'url2', 'url3'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-5g-12-gb-256-gb-sinii-133432433/?c=750000000'
    },
    {
      id: 7,
      name: 'Samsung Galaxy S25 5G 12 ГБ/256 ГБ синий',
      description: 'Стильный смартфон с мощным процессором и отличной камерой.',
      price: 128,
      rating: 4,
      image: '',
      images: ['url1', 'url2', 'url3'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/'
    },
    {
      id: 8,
      name: 'Смартфон Samsung Galaxy A56 5G 8 ГБ/256 ГБ зеленый',
      description: 'Стильный смартфон с мощным процессором и отличной камерой.',
      price: 737377,
      rating: 4,
      image: '',
      images: ['url1', 'url2', 'url3'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a56-5g-8-gb-256-gb-zelenyi-136419901/?c=750000000'
    },
    {
      id: 9,
      name: 'Смартфон Samsung Galaxy S25 Ultra 5G 12 ГБ/256 ГБ серый',
      description: 'Стильный смартфон с мощным процессором и отличной камерой.',
      price: 1234567,
      rating: 4,
      image: '',
      images: ['url1', 'url2', 'url3'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-seryi-133434844/?c=750000000'
    },
    {
      id: 10,
      name: 'Смартфон Apple iPhone 14 256Gb Dual Sim starlight',
      description: 'Стильный смартфон с мощным процессором и отличной камерой.',
      price: 765,
      rating: 4,
      image: '',
      images: ['url1', 'url2', 'url3'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-256gb-dual-sim-starlight-107734147/?c=750000000'
    },
    
  ];
}