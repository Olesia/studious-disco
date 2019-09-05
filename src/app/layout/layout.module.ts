import { NgModule } from '@angular/core';
import { LoginComponent, PathNotFoundComponent } from './components';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    PathNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    PathNotFoundComponent
  ]

})
export class LayoutModule { }
