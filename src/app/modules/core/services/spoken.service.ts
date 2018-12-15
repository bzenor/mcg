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

  constructor() {
  }

  public speak(words: string) {
    return spoken.say(words, 'Google UK English Female');
  }
}
