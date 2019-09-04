import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ManageProductsListComponent } from './components/manage-products-list/manage-products-list.component';
import { ManageProductsItemComponent } from './components/manage-products-item/manage-products-item.component';


@NgModule({
  declarations: [AdminRoutingModule.components, ManageProductsListComponent, ManageProductsItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule,
    AdminRoutingModule
  ],
exports: [
  AdminRoutingModule.components ]
})
export class AdminModule { }
