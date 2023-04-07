import { Injectable } from '@angular/core';
import { Todo } from './model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public todos: Todo[] = [];

  constructor() {
    let savedTodos = localStorage.getItem('todos');
    if (savedTodos != null) {
      this.todos = JSON.parse(savedTodos);
      console.log(JSON.parse(savedTodos));
    }
  }

  saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  createTodo(label: string, city: string): void {
    if (!label) return;
    this.todos.push({
      id: Math.floor(Math.random() * 1000),
      creationDate: new Date().valueOf(),
      label: label,
      done: false,
      city: city,
    });
    this.saveTodos();
  }

  updateTodo(todo: Todo): void {
    let i = this.todos.findIndex((t) => t.id == todo.id);
    if (i == -1) {
      console.warn('Todo of id : ' + todo.id + " couldn't be found");
      return;
    }
    this.todos[i] = todo;
    this.saveTodos();
  }
}
