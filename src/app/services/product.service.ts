import { Injectable, inject, isDevMode } from '@angular/core';
import { Product } from '../types';
import { LoadingAnimationService } from './loading-animation.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private dataUrl = 'assets/data.json';
  products: Array<Product> = [];
  filteredProducts: Array<Product> = [];
  activeFilter: string = '';
  loadingAnimationService: LoadingAnimationService = inject(LoadingAnimationService);

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<{ products: Product[] }>(this.dataUrl).pipe(
      map(data => {
        this.products = data.products;
        this.filteredProducts = this.products;
        return this.products;
      })
    );
  }

  findById(id: string): Product | undefined {
    return this.products.find(product => product.product_id === id);
  }

  filterProducts(filter: string): Product[] {
    this.loadingAnimationService.startLoading();
    setTimeout(() => {
      this.activeFilter = filter;
      this.filteredProducts = this.products.filter(
        product => product.category.toLowerCase() === filter.toLowerCase()
      );
      this.loadingAnimationService.stopLoading();
    }, 300);
    return this.filteredProducts;
  }

  search(input: string): void {
    this.loadingAnimationService.startLoading();
    setTimeout(() => {
      this.filteredProducts = this.products.filter(({ product_name }) =>
        product_name.toLowerCase().includes(input.toLowerCase())
      );
      this.loadingAnimationService.stopLoading();
    }, 300);
  }
}
