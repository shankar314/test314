import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products=[];
  constructor(private productsservice : ProductsService) { }
  ngOnInit() {
    this.getProducts();
  }
  getProducts(): void {
    this.products=this.productsservice.getProducts();
  }
}
