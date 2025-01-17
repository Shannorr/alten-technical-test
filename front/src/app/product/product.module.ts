import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductsAdminComponent } from './products-admin/products-admin.component';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [
    ProductsAdminComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
  ]
})
export class ProductModule { }
