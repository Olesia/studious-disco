import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';

@Injectable({providedIn: CoreModule})

export class ConstantsService {
  getAllData() {
    return { App: 'My shop', Ver: '1.0' };
  }
}

export const constInstance = new ConstantsService();
