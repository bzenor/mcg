/********************************
 * spoken.service
 * Package and class imports
 *******************************/
import { Injectable } from '@angular/core';

import spoken from '../../../../../node_modules/spoken/build/spoken.js';

import { AppConfig } from '../../../app.config';

/********************************
 * Injectable declaration
 *******************************/
@Injectable()
export class SpokenService {

  constructor(private config: AppConfig) {
  }

  public speak(words: string) {
    return spoken.say(words, this.config.voice);
  }
}
