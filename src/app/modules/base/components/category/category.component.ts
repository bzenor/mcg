/********************************
 * category.component
 *******************************/
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Action } from '../../../../common/models/action.model';
import { SpokenService } from '../../../core/services/spoken.service';

/********************************
 * Component declaration
 *******************************/
@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: [ './category.component.css' ]
})

/********************************
 * Class declaration
 *******************************/
export class CategoryComponent {
  
  public speaking: boolean = false;
  public actions: Action[];
  public action: Action;
  public keys: string[] = [];

  @Input()
  set config(config) {
    this.keys = config.map((value) => value.title);
    this.actions = config;
  }

  @Output() lastSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private spokenService: SpokenService) {
  }

  public selectCategory(index: number): void {
    this.action = this.actions[index];
    this.spokenService.speak(this.action.speech).then(
      (speech) => {
        if(!this.action.actions) {
          this.lastSelected.emit(true);
        }
      }
    );
  }

  public closeSelected(last: boolean) {
    this.action = undefined;
    this.lastSelected.emit(last);
  }
}
