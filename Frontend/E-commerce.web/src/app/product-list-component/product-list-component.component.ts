import { Component, inject , OnInit} from '@angular/core';
import { Product, ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-product-list-component',
  standalone: true,
  imports: [CommonModule , RouterModule],
  templateUrl: './product-list-component.component.html',
  styleUrl: './product-list-component.component.css'
})
export class ProductListComponentComponent implements OnInit { 
  
  //http= inject(HttpClient);
  private ProductService = inject(ProductService);
  products: Product[] = [];

  ngOnInit(): void {
      this.loadProducts();
  }
  /*
  getProducts() { 
    this.http.get('https://localhost:44335/api/Product').subscribe((products: any) => {
      console.log(products);
      this.products = products;
  });
} */
/*
loadProducts() {
  this.ProductService.getProducts().subscribe((products: any) => {
console.log(products)
this.products = products;
}
  )

}*/
loadProducts(){
  this.ProductService.getProducts().subscribe(
    { next: (products: any) => {
    this.products = products as Product[];
    console.log('products fetched successfully');
    },
    error: (error) =>  console.log('error fetching products',error)
  });
}
}


  
  
  


