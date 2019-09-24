import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BgChangerDirective } from './directives/bg-changer/bg-changer.directive';
import { FontChangerDirective } from './directives/font-changer/font-changer.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { ValidatorsModule } from '../validators/validators.module';

@NgModule({
  declarations: [BgChangerDirective, FontChangerDirective, OrderByPipe],
  imports: [
    CommonModule,
    ValidatorsModule
  ],
  exports: [
    BgChangerDirective,
    FontChangerDirective,
    OrderByPipe,
    ValidatorsModule
  ]
})

export class SharedModule { }
