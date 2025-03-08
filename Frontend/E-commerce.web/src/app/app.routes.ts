import { Routes } from '@angular/router';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    
   { path: 'product-list',
    component: ProductListComponentComponent},
    {path: 'product/:id',
    component: ProductDetailComponent },
    { path: 'cart', component: CartComponent },


    
];
