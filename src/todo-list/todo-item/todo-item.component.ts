import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomDatePipe } from './custom-date.pipe';
import { Todo } from '../model/todo';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  imports: [CommonModule, FormsModule],
  providers: [CustomDatePipe],
  standalone: true,
})
export class TodoItemComponent implements OnInit {
  /**
   * Tell if the todo is being edited
   */
  public editMode: boolean = false;

  constructor(public customDate: CustomDatePipe) {
    this.customDate = customDate;
  }

  @Input()
  todo: Todo;
  @Output()
  updateLabelEvent = new EventEmitter<Todo>();

  /**
   * Change the state in the todo item of
   * the list in parent by passing the index
   */
  changeItemState(): void {
    this.todo.done = !this.todo.done;
    this.updateLabelEvent.emit(this.todo);
  }

  updateLabel(): void {
    this.updateLabelEvent.emit(this.todo);
    this.editMode = false;
  }

  changeEditMode(): void {
    this.editMode = !this.editMode;
  }

  ngOnInit() {}
}
