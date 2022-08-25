import { Component } from '@angular/core';
import {FormGroup, FormBuilder, FormControl}  from'@angular/forms'
import { Product } from 'src/app/models/product';
import { MerchantService } from 'src/app/services/merchant.service';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent {

  productDetail !: FormGroup;

  prodObj : Product = new Product(1,'name','description',0,0,'imageUrl','merchantName');

  productList: Product[]= []

  constructor(private formBuilder: FormBuilder, private prodService : MerchantService){}

  ngOnInit(): void {
    this.getAllProduct();
    this.productDetail = this.formBuilder.group({
      id:[''],
      name: [''],
      description:[''],
      price:[''],
      stocks:[''],
      image:[''],
      merchantName:['']
    })
  }

  addProduct(){
    console.log(this.productDetail);
    this.prodObj.id=this.productDetail.value.id;
    this.prodObj.name=this.productDetail.value.name;
    this.prodObj.description=this.productDetail.value.description;
    this.prodObj.unitPrice=this.productDetail.value.price;
    this.prodObj.unitsInStock=this.productDetail.value.stocks;
    this.prodObj.imageUrl=this.productDetail.value.image;
    this.prodObj.merchantName=this.productDetail.value.merchantName;

    this.prodService.addProduct(this.prodObj).subscribe(res =>{
      console.log(res);
      this.getAllProduct()
    })
  }

  getAllProduct(){
    this.prodService.getAllProduct().subscribe(res=>{
      this.productList= res;
    })
  }

  editProduct(prod: Product){
    this.productDetail.controls['id'].setValue(prod.id)
    this.productDetail.controls['name'].setValue(prod.name)
    this.productDetail.controls['description'].setValue(prod.description)
    this.productDetail.controls['price'].setValue(prod.unitPrice)
    this.productDetail.controls['stocks'].setValue(prod.unitsInStock)
    this.productDetail.controls['image'].setValue(prod.imageUrl)
    this.productDetail.controls['merchantName'].setValue(prod.merchantName)

  }

  updateProduct(){
    this.prodObj.id=this.productDetail.value.id;
    this.prodObj.name=this.productDetail.value.name;
    this.prodObj.description=this.productDetail.value.description;
    this.prodObj.unitPrice=this.productDetail.value.price;
    this.prodObj.unitsInStock=this.productDetail.value.stocks;
    this.prodObj.imageUrl=this.productDetail.value.image;
    this.prodObj.merchantName=this.productDetail.value.merchantName;

    this.prodService.updateProduct(this.prodObj).subscribe(res=>{
      console.log(res);
      this.getAllProduct();
    })

  }

  deleteProduct(prod: Product){

    this.prodService.deleteProduct(prod).subscribe(res=>{
      console.log(res);
      alert('Product deleted successfully')
      this.getAllProduct();
    })

  }

}
