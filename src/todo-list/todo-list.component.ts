import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true,
})
export class TodoListComponent implements OnInit {
  public todos: Todo[];
  public tmpInput: string;
  constructor() {
    this.todos = [{ label: 'Test', done: false }];
  }
  updateTodoState(i: number): void {
    this.todos[i].done = !this.todos[i].done;
  }
  addTodo() {
    if (!this.tmpInput) return;
    this.todos[this.todos.length] = { label: this.tmpInput, done: false };
    this.tmpInput = '';
  }
  remainingTasks(): number {
    return this.todos.filter((t) => t.done == false).length;
  }

  ngOnInit() {}
}
