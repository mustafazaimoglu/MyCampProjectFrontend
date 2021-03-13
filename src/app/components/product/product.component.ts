import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];

  dataLoaded = false;
  
  constructor(private productService:ProductService,
    private activedRoute:ActivatedRoute) { } // built in service mevcut routelama işlemi

  ngOnInit(): void {

    this.activedRoute.params.subscribe(params => {
      if(params["categoryId"]){
        this.getAllProductsByCategory(params["categoryId"]);
      }
      else
      {
        this.getProducts();
      }
    })

    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(response => {
      this.products = response.data
      this.dataLoaded = true
    })
  }

  getAllProductsByCategory(categoryId:number) {
    this.productService.getProductsByCategory(categoryId).subscribe(response => {
      this.products = response.data
      this.dataLoaded = true
    })
  }

}
