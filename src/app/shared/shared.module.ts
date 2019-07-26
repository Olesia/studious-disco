import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BgChangerDirective } from './directives/bg-changer/bg-changer.directive';
import { FontChangerDirective } from './directives/font-changer/font-changer.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [BgChangerDirective, FontChangerDirective, OrderByPipe],
  imports: [
    CommonModule
  ],
  exports: [
    BgChangerDirective,
    FontChangerDirective,
    OrderByPipe
  ]
})

export class SharedModule { }
