/********************************
 * app.component
 *******************************/
import { Component, OnInit } from '@angular/core';

import { Action } from '../../../../common/models/action.model';
import { ConfigService } from '../../../core/services/config.service';

/********************************
 * Component declaration
 *******************************/
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

/********************************
 * Class declaration
 *******************************/
export class AppComponent implements OnInit {

  public config: Action;

  constructor(private configService: ConfigService) {
  }

  ngOnInit() {
    this.configService.getConfig().subscribe(
      (config) => {
        this.config = config['actions'];
      }
    )
  }
}
