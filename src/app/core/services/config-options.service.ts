import { Injectable } from '@angular/core';
import { ConfigOptionsModel } from '../models/config-options.model';
import { CoreModule } from '../core.module';

@Injectable({ providedIn: CoreModule })

export class ConfigOptionsService {
  private option: ConfigOptionsModel;

  constructor() { }

  getOption(): ConfigOptionsModel {
    return this.option;
  }

  setOption(option: ConfigOptionsModel): void {
    this.option = option;
  }
}
