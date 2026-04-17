import { Component, OnInit, inject, computed } from '@angular/core'; 
import { ProductService } from '../../app/core/service/product';
import { LoadingService } from '../../app/core/service/loading';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './productlist.html',
  standalone: false,
  styleUrls: ['./productlist.css']
})
export class ProductListComponent implements OnInit {
  public productService = inject(ProductService);
  public loadingService = inject(LoadingService);
  private router = inject(Router);

  public products = this.productService.products; 

  ngOnInit() {
    this.productService.getProducts();
  }

  viewDetail(id: number) {
    this.router.navigate(['/productos', id]);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}