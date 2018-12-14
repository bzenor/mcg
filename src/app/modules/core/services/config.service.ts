/********************************
 * config.service
 * Package and class imports
 *******************************/
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AppConfig } from '../../../app.config';
import { Action } from '../../../common/models/action.model';

/********************************
 * Injectable declaration
 *******************************/
@Injectable()
export class ConfigService {

  public config: Action;

  constructor(private appConfig: AppConfig,
              private httpClient: HttpClient) {
  }

  public getConfig() {
    return this.httpClient.get(this.appConfig.configPath);
  }
}
