import { InjectionToken } from '@angular/core';
import { GeneratorService } from './generator.service';

export const genData = new InjectionToken<string>('genData');

export function GeneratorFactoryService(n: number) {
    return (data: GeneratorService): string =>
      data.getRandomStr(n);
  }

