import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// @NgRx
import { StoreModule } from '@ngrx/store';
import { ProductsStoreModule } from './products/products-store.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';
import { routerReducers, CustomSerializer, RouterEffects } from './router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './../../../environments/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(routerReducers, {
      runtimeChecks: {
       strictStateImmutability: true,
       strictActionImmutability: true,
       strictStateSerializability: true,
       strictActionSerializability: false
     }
    }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal,
      serializer: CustomSerializer
    }),

    EffectsModule.forRoot([RouterEffects]),
    ProductsStoreModule,

    !environment.production ? StoreDevtoolsModule.instrument() : [],

  ]
})
export class RootStoreModule { }
