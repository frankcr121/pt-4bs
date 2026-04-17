import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../features/login/login';
import { ProductListComponent } from '../features/product-list/productlist';
import { ProductDetailComponent } from '../features/product-detail/productdetail';
import { authGuard } from './core/guards/auth';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { 
    path: 'productos', 
    component: ProductListComponent, 
    canActivate: [authGuard] 
  },
  { 
    path: 'productos/:id', 
    component: ProductDetailComponent, 
    canActivate: [authGuard] 
  },
  { path: '', redirectTo: '/productos', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }