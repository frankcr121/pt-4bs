import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { LoadingService } from './loading'; 
import { finalize } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private http = inject(HttpClient);
  private loading = inject(LoadingService);
  private apiUrl = 'https://fakestoreapi.com/products';

  
  products = signal<Product[]>([]);

  getProducts() {
    this.loading.show(); 
    this.http.get<Product[]>(this.apiUrl).pipe(
      finalize(() => this.loading.hide())
    ).subscribe(data => this.products.set(data));
  }

  getProductById(id: number) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
}