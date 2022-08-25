import { Injectable } from '@angular/core';
import { HttpClient , HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  addProductURL : string;
  getProductURL: string;
  updateProductURL: string;
  deleteProductURL: string;

  constructor(private http:  HttpClient){

 this.addProductURL= 'http://localhost:9090/prod/addProduct'

 this.getProductURL = 'http://localhost:9090/products'

 this.updateProductURL ='http://localhost:9090/prod/updateProduct'

this. deleteProductURL = 'http://localhost:9090/prod/deleteProduct'

  }


  addProduct(prod: Product): Observable<Product>{
     return this.http.post<Product>(this.addProductURL,prod)
  }

  getAllProduct() {
  return this.http.get<Product[]>(this.getProductURL)
  }

  updateProduct(prod:Product):Observable<Product>{
    return this.http.put<Product>(this.updateProductURL,prod)
  }

  deleteProduct(prod: Product):Observable<Product> {
    return this.http.delete<Product>(this.deleteProductURL+'/'+prod.id)
  }
}
