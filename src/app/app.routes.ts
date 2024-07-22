import { Routes } from '@angular/router';
import { ShopComponent } from "./shop/shop.component";
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderConfirmationComponent } from "./order-confirmation/order-confirmation.component";
import { OrdersComponent } from "./orders/orders.component";

export const routes: Routes = [
  { path: 'shop', component: ShopComponent },
  { path: 'product/:product_id', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'confirmation', component: OrderConfirmationComponent },
  { path: 'orders', component: OrdersComponent },
  { path: '', redirectTo: 'shop', pathMatch: 'full' }
];
