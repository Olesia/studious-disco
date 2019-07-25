import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BgChangerDirective } from './directives/bg-changer/bg-changer.directive';
import { FontChangerDirective } from './directives/font-changer/font-changer.directive';

@NgModule({
  declarations: [BgChangerDirective, FontChangerDirective],
  imports: [
    CommonModule
  ],
  exports: [
    BgChangerDirective,
    FontChangerDirective
  ]
})

export class SharedModule { }
