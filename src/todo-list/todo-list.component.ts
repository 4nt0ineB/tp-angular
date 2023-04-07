declare var M: any;
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from './model/todo';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  imports: [CommonModule, FormsModule, TodoItemComponent, HttpClientModule],
  providers: [TodoService],
  standalone: true,
})
export class TodoListComponent implements OnInit {
  public textInput: string;
  todos: Todo[] = [];
  loaded: boolean = true;

  constructor(public todoService: TodoService) {
    this.todoService = todoService;
  }

  updateTodo(todo: Todo): void {
    this.todoService.updateTodo(todo).subscribe((response) => {
      if (response) {
        M.toast({ html: 'Mise à jour effectuée' });
        this.getTodos();
      }
    });
  }

  addTodo(): void {
    if (!this.textInput) return;
    this.todoService.createTodo(this.textInput).subscribe((response) => {
      if (response) {
        M.toast({ html: "La tâche '" + this.textInput + "' à été ajouté" });
        this.textInput = '';
        this.getTodos();
      }
    });
  }

  private getTodos(): void {
    this.todoService.getTodos().subscribe((response: Todo[]) => {
      this.todos = response;
      this.loaded = true;
    });
  }

  deleteTodo(todo: Todo): void {
    this.todoService.deleteTodo(todo.id).subscribe((response) => {
      if (response) {
        M.toast({
          html: "La tâche '" + todo.label.slice(20) + "' à été supprimé",
        });
        this.getTodos();
      }
    });
  }

  ngOnInit() {
    this.getTodos();
  }
}
