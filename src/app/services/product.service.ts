import { HttpClient } from '@angular/common/http' // to make requests api
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponseModel } from 'src/models/productResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  apiUrl = "https://localhost:44336/api/products/getall";

  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ProductResponseModel> {
    return this.httpClient.get<ProductResponseModel>(this.apiUrl);
  }
  
}
