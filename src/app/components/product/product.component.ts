import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  dataLoaded = false;
  filterText = "";
  
  constructor(private productService:ProductService,
    private activedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private cartService:CartService) { } // built in service mevcut routelama işlemi

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

  addToCart(product:Product)
  {
    this.toastrService.success("Sepete Eklendi", product.productName);
    this.cartService.addToCart(product);
  }

}
