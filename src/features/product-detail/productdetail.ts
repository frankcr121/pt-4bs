import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../app/core/service/product';
import { LoadingService } from '../../app/core/service/loading';
import { Product } from '../../app/core/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './productdetail.html',
  standalone: false,
  styleUrls: ['./productdetail.css']
})
export class ProductDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private productService = inject(ProductService);
  public loadingService = inject(LoadingService);

  product = signal<Product | null>(null);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadingService.show();
      this.productService.getProductById(+id).subscribe({
        next: (data) => {
          this.product.set(data);
          this.loadingService.hide();
        },
        error: () => {
          this.loadingService.hide();
          this.regresar();
        }
      });
    }
  }

  regresar() {
    this.router.navigate(['/productos']);
  }
}