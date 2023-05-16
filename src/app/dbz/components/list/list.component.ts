import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  @Input()
  public characterList : Character[] = [{
    name : 'Trunks',
    power: 10
  }];

  @Output()
  public onDelete : EventEmitter<string> = new EventEmitter();
  
  onDeleteCharacter(character: Character) : void {
    if(!character) return;
    this.onDelete.emit(character.id);
  }
}
