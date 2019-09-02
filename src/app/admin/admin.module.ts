import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdminRoutingModule.components],
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
