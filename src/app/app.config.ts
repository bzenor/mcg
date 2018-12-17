/********************************
 * app.config
 * Package and class imports
 *******************************/
import { Injectable } from '@angular/core';

/********************************
 * Class declaration
 *******************************/
@Injectable()
export class AppConfig {
  
  public configPath: string = './assets/actions.json';

  public voice: string = 'Google UK English Female';
}
