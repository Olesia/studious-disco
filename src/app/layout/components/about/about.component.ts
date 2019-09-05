import { Component, OnInit, Optional, Inject, OnDestroy } from '@angular/core';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { ConfigOptionsService } from '../../../core/services/config-options.service';
import { ConfigOptionsModel } from 'src/app/core/models/config-options.model';
import { ConstantsService, constInstance } from 'src/app/core/services/constants.service';
import { genData, GeneratorFactoryService } from 'src/app/core/services/generator-factory';
import { GeneratorService } from 'src/app/core/services/generator.service';
import { AppSettingsService } from 'src/app/core/services/app-settings.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],

  providers: [{ provide: Storage, useClass: LocalStorageService },
  { provide: ConstantsService, useValue: constInstance },
    GeneratorService,
  { provide: genData, useFactory: GeneratorFactoryService(5), deps: [GeneratorService] }]
})
export class AboutComponent implements OnInit, OnDestroy {
  userInfo: ConfigOptionsModel;
  applicationInfo: {};
  factoryString: string;

  constructor(
    private storage: Storage,
    private constantService: ConstantsService,
    private localStorageService: LocalStorageService,
    public appSettingsService: AppSettingsService,

    @Inject(genData) private factoryData: string,
    @Optional() private configOptionsService: ConfigOptionsService
  ) {
  }

  ngOnInit() {
    this.applicationInfo = JSON.parse(this.appSettingsService.getSettingsFromLS());
    if (!this.applicationInfo) {
      this.appSettingsService.getSettingsFromFile().subscribe(
        data => {
          this.applicationInfo = data ? data : this.constantService.getAllData();
          if (data) {
            this.localStorageService.setItem('appSettings', JSON.stringify(data));
          }
        });
    }

    this.storage.setItem('info', JSON.stringify(this.applicationInfo));

    if (this.configOptionsService) {
      this.configOptionsService.setOption(new ConfigOptionsModel(1, 'Olesia'));
      this.userInfo = this.configOptionsService.getOption();
    }

    this.factoryString = this.factoryData;
  }

  ngOnDestroy() {
    this.storage.removeItem('1');
  }
}
