import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://localhost:44335/api/Product';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);

  constructor() { }

  getProducts() : Observable<Product> {
    return this.http.get<Product>(baseUrl);
  }

  getProductById(id: string) : Observable<Product>{
    return this.http.get<Product>(`${baseUrl}/${id}`);
  }
 
  }


