/********************************
 * spoken.service
 * Package and class imports
 *******************************/
import { Injectable } from '@angular/core';

import spoken from '../../../../../node_modules/spoken/build/spoken.js';

/********************************
 * Injectable declaration
 *******************************/
@Injectable()
export class SpokenService {

  private spoken = spoken || null;

  constructor() {
  }

  public speak(words: string) {
    return this.spoken.say(words, 'Google UK English Female');
  }
}
