declare var M: any;
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../model/todo';
import { TodoItemComponent } from './todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  imports: [CommonModule, FormsModule, TodoItemComponent],
  standalone: true,
})
export class TodoListComponent implements OnInit {
  public todos: Todo[];
  public textInput: string;
  constructor() {
    this.todos = [{ label: 'Test', done: false }];
  }

  updateTodoState(i: number): void {
    this.todos[i].done = !this.todos[i].done;
  }

  updateTodoLabel(obj: any): void {
    this.todos[obj.index].label = obj.label;
    M.toast({ html: 'Mise à jour effectuée' });
  }

  addTodo() {
    if (!this.textInput) return;
    this.todos[this.todos.length] = { label: this.textInput, done: false };
    M.toast({ html: "La tâche '" + this.textInput + "' à été ajouté" });
    this.textInput = '';
  }

  ngOnInit() {}
}
