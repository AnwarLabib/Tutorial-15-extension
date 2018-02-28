import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CartItemComponent } from './cart-item/cart-item.component';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  imports: [ThemeModule, CartRoutingModule,FormsModule,HttpModule],
  declarations: [CartItemComponent,CartComponent],
  providers: []
})
export class CartModule {}
