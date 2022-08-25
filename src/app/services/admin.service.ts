import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../models/User";
import {Product} from "../models/product";
import {Soldproduct} from "../models/soldproduct";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  LOCALPATH = 'http://localhost:9090';
  constructor(
    private httpClient:HttpClient
  ) { }

  getAllProducts() {
    return this.httpClient.get<Product[]>(this.LOCALPATH+'/products/get');
  }
  getAllSoldProducts() {
    return this.httpClient.get<Soldproduct[]>(this.LOCALPATH+'/soldproducts/get');
  }
  addUser(newUser: User) {
    return this.httpClient.post<User>(this.LOCALPATH +'/users/add', newUser);
  }

  deleteUser(id) {
    return this.httpClient.delete<User>(this.LOCALPATH+'/users/' + id);
  }

}
