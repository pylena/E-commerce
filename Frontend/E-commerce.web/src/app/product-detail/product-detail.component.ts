import { Component, inject, OnInit } from '@angular/core';
import { Product, ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit { 
  product: Product | undefined;
  route = inject(ActivatedRoute);
  id : string | null = null;
  //http= inject(HttpClient);
  private ProductService = inject(ProductService);
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id !== null) {
      this.getProductById(this.id);
    }
}

getProductById(id: string){
  this.ProductService.getProductById(id).subscribe( {
    next: (product) => this.product = product,
    error: (err: any) => console.log(err)
  });

}

}
