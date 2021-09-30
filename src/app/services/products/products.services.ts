import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { IProduct, Product } from "./../../models/product.model";
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

@Injectable()
export class ProductsServices {
    productsUrl = 'api/products';

    constructor(private http: HttpClient){};

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productsUrl).pipe(
            retry(2),
            catchError((error: HttpErrorResponse) => {
              console.error(error);
              return throwError(error);
            })
          );
    }

    addProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(this.productsUrl, product).pipe(
          catchError((error: HttpErrorResponse) => {
            console.error(error);
            return throwError(error);
          })
        )
    }

    editProduct(product: Product): Observable<any> {
        return this.http.put(this.productsUrl + "/" + product.id, product);
    }

    deleteProduct(id: number): Observable<any> {
        return this.http.delete(this.productsUrl + "/" + id);
    }
}