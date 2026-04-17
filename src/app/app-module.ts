import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { HttpClientModule, HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component'; 

import { LoginComponent } from '../features/login/login';
import { ProductListComponent } from '../features/product-list/productlist';
import { ProductDetailComponent } from '../features/product-detail/productdetail';
import { authInterceptor } from './core/interceptors/auth';

import { CommonModule } from '@angular/common'; 
import { SkeletonModule } from 'primeng/skeleton'; 
import { TagModule } from 'primeng/tag'; 

import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductListComponent,
    ProductDetailComponent

  ],
  imports: [
    ButtonModule,
    TableModule,
    CardModule,
    InputTextModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SkeletonModule,
    TagModule,
    DropdownModule
  ],
  providers: [
    provideHttpClient(withInterceptors([authInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }