import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "./product.service";
export interface CartItem {
  id: number;
  productId: number;
  productName: string;
  price: number;
  quantity: number;
  imageUrl: string;
}
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:5000/api/cart';
  private http = inject(HttpClient);
  


  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.apiUrl);
  }

  addToCart(item: CartItem): Observable<CartItem> {
    return this.http.post<CartItem>(this.apiUrl, item);
  }

  updateQuantity(productId: number, quantity: number): Observable<CartItem> {
    return this.http.put<CartItem>(`${this.apiUrl}/${productId}`, quantity);
  }

  removeFromCart(productId: number): Observable<CartItem> {
    return this.http.delete<CartItem>(`${this.apiUrl}/${productId}`);
  }

  clearCart(): Observable<CartItem> {
    return this.http.delete<CartItem>(this.apiUrl);
  }
}
