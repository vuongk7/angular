import { Component, OnInit } from '@angular/core';
import { Iproducts } from 'src/app/models/product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productsDetail! : Iproducts
  nameInput: String ="";
  isStatus: boolean = false;
  productList:Iproducts[]=[
    {id:1, name:"product 1", price:200, status:true},
    {id:2, name:"product 2", price:300, status: false}
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onHandleClick(){
    this.isStatus= ! this.isStatus
  }
  onHandleDelete(id: number){
    this.productList = this.productList.filter(product =>product.id !==id)
  }
  onHandleGetInfo(products: Iproducts) {
    console.log(1);
    this.productsDetail = products;
  }
}
