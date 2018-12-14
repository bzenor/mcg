/********************************
 * core.module
 * Package and class imports
 *******************************/
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppConfig } from '../../app.config';
import { ConfigService } from './services/config.service';
import { SpokenService } from './services/spoken.service';

/********************************
 * Module declaration
 *******************************/

@NgModule({
  declarations: [],
  imports: [
    BrowserModule
  ]
})

export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if(parentModule) {
      throw new Error('CoreServicesModule is already loaded.  Import it in the AppModule only.');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        AppConfig,
        ConfigService,
        SpokenService
      ]
    };
  }
}
