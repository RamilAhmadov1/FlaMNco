import { Route } from '@angular/router';
import { ProductComponent } from './product/product.component'; // Adjust path as necessary


export const routes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'product/:product_id', component: ProductComponent },
  // Add other routes as needed
];

