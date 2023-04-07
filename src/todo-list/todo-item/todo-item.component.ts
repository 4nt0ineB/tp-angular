import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true,
})
export class TodoItemComponent implements OnInit {
  /**
   * Tell if the todo is being edited
   */
  public editMode: boolean = false;

  @Input()
  index: number;
  @Input()
  label: String;
  @Input()
  state: boolean;
  @Output()
  newTodoItemEvent = new EventEmitter<number>();
  @Output()
  updateLabelEvent = new EventEmitter<any>();

  /**
   * Change the state in the todo item of
   * the list in parent by passing the index
   */
  changeItemState(): void {
    this.newTodoItemEvent.emit(this.index);
  }

  changeEditMode(): void {
    this.editMode = !this.editMode;
  }

  updateLabel(): void {
    this.updateLabelEvent.emit({ label: this.label, index: this.index });
    this.editMode = false;
  }

  constructor() {}

  ngOnInit() {}
}
