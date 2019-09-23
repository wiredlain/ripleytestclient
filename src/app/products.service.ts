import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AuthService } from './core/auth.service';

const endpoint = 'https://ripleytestapi.herokuapp.com/api';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient, private authService: AuthService) {}

  private extractData(res: Response) {
    let body = res;
    return body || [];
  }

  getProducts(skus: Array<String>): Observable<any> {
    let token = '';
    let products_url = `${endpoint}/products/${skus}`;
    if (this.authService.isLoggedIn){
      const user = JSON.parse(localStorage.getItem('user'));
      //console.log(user);
      token = user.stsTokenManager.accessToken;
      let headers: HttpHeaders = new HttpHeaders();
      httpOptions.headers = headers.append('FIREBASE_AUTH_TOKEN', token);
      console.log(httpOptions);


    }
    return this.http.get(products_url, httpOptions).pipe(
      map(this.extractData));
  }

  getProductBySku(sku: String): Observable<any> {
    return this.http.get(`${endpoint}/products/by-id/${sku}`).pipe(
      map(this.extractData));
  }
}
