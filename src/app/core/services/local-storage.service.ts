import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';

@Injectable({ providedIn: CoreModule })

export class LocalStorageService {

  constructor() { }

  getItem(key: string): string {
    console.log('Custom LocalStorageService: Get item');
    return window.localStorage.getItem(key);
  }

  setItem(key: string, value: string): void {
    console.log('Custom LocalStorageService: Set item: ' + value);
    window.localStorage.setItem(key, value);
  }

  removeItem(key: string) {
    console.log('Custom LocalStorageService: Remove item');
    window.localStorage.removeItem(key);
  }

}
