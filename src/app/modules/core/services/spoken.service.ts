/********************************
 * spoken.service
 * Package and class imports
 *******************************/
import { Injectable } from '@angular/core';

/********************************
 * Injectable declaration
 *******************************/
@Injectable()
export class SpokenService {

  private spoken = window['spoken'];

  constructor() {
  }

  public say(words: string) {
    return this.spoken.say(words);
  }
}
