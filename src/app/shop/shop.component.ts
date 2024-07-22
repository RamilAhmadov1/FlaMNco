import { Component, OnInit, inject } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';
import { Filter, Product } from '../types';
import { ProductService } from '../services/product.service';
import { LoadingAnimationService } from '../services/loading-animation.service';
import { RouterLink } from '@angular/router';
import { CheckoutService } from '../services/checkout.service';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [NgFor, RouterLink, NgClass, FormsModule],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  productService: ProductService = inject(ProductService);
  checkoutService: CheckoutService = inject(CheckoutService);
  products: Product[] = [];
  searchInput: string = '';
  filters: Filter[] = [
    { name: 'Electric Guitar', label: 'Electric Guitar' },
    { name: 'Acoustic Guitar', label: 'Acoustic Guitar' },
    { name: 'Classical Guitar', label: 'Classic Guitar' },
    { name: 'Bass Guitar', label: 'Bass Guitar' },
    { name: 'Violin', label: 'Violin' },
    { name: "Accordion", label: "Accordion" },
    { name: "Piano", label: "Piano" },
    { name: "Bugle", label: "Bugle" },
    { name: "Saxophone", label: "Saxophone" },
    { name: "Trumpet", label: "Trumpet" },
    { name: "Flute", label: "Flute" },
    { name: "Drum", label: "Drum" }
    
    
  ];
  loadingAnimationService: LoadingAnimationService = inject(LoadingAnimationService);

  ngOnInit(): void {
    this.getAllProducts();
    this.productService.activeFilter = '';
  }

  getAllProducts(): void {
    this.loadingAnimationService.startLoading();
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.productService.filteredProducts = this.products;
      this.loadingAnimationService.stopLoading();
    });
  }

  filterProducts(filter: string): void {
    this.productService.activeFilter = filter;
    this.products = this.productService.filterProducts(filter);
  }

  search(): void {
    this.productService.search(this.searchInput);
  }
}
