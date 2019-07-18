import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BgChangerDirective } from './directives/bg-changer/bg-changer.directive';

@NgModule({
  declarations: [BgChangerDirective],
  imports: [
    CommonModule
  ],
  exports: [
    BgChangerDirective
  ]
})

export class SharedModule { }
