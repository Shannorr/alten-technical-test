import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'assets/products.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get<any>(this.productsUrl);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${this.productsUrl}/${id}`);
  }
}
