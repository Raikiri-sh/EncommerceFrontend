import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {


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
products: Product[] = [
new Product(1,'Product1', 'This is the product 1 description. This product...cool', 100,20,'Gucci'),
new Product(2,'Product2', 'This is the product 2 description. This product ...ok', 200,10,'Prada'),
new Product(3,'Product3', 'This is the product 3 description. This product... gud', 500,6,'Versace'),
new Product(4,'Product4', 'This is the product 4 description. This product ...fine', 60,70,'McQueen'),
new Product(5,'Product5', 'This is the product 5 description. This produc.. droool', 5500,5,'Tiffany'),
new Product(6,'Product6', 'This is the product 6 description. This product is really cooool', 900,4,'Burberry'),

]


  getProducts() : Product[]{
    //TODO: Populate products from an API or any other data source and return an Observable
    return this.products
  }
  getAllProduct() {
    return this.http.get<Product[]>(this.getProductURL)
  }
}
