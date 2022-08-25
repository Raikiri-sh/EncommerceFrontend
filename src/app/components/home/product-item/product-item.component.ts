import { Component, OnInit , Input,EventEmitter, Output} from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product

  //@Output() viewDetailsEvent:EventEmitter<string> = new EventEmitter();

  ViewDetails:boolean=true

  //hide info in view details
  visible:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  goToItemDetails(productItem: Product): void{

    console.log(productItem)
    this.ViewDetails =!this.ViewDetails
    this.visible = !this.visible

  }
  stockDecrease(productItem: Product): void{
    if(productItem.unitsInStock >0) {
      this.productItem.unitsInStock--;
    }
    else {
      alert('product out of stock')
    }
  }

}
