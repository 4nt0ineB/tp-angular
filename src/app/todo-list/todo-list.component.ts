declare var M: any;
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../model/todo';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  loaded: boolean = false;
  username: string;

  constructor(public todoService: TodoService, private route: ActivatedRoute) {
    this.todoService = todoService;
  }

  updateTodo(todo: Todo): void {
    this.todoService.updateTodo(this.username, todo).subscribe((response) => {
      if (response) {
        M.toast({ html: 'Mise à jour effectuée' });
        this.getTodos();
      }
    });
  }

  addTodo(label: string): void {
    if (!label) return;
    this.todoService.createTodo(this.username, label).subscribe((response) => {
      if (response) {
        M.toast({ html: "La tâche '" + label + "' à été ajouté" });
        this.getTodos();
      }
    });
  }

  private getTodos(): void {
    this.todoService.getTodos(this.username).subscribe((response: Todo[]) => {
      this.todos = response;
      this.loaded = true;
    });
  }

  deleteTodo(todo: Todo): void {
    this.todoService
      .deleteTodo(this.username, todo.id)
      .subscribe((response) => {
        if (response) {
          M.toast({
            html: "La tâche '" + todo.label.slice(20) + "' à été supprimé",
          });
          this.getTodos();
        }
      });
  }

  ngOnInit() {
    this.todos = [];
    this.username = this.route.snapshot.paramMap.get('username');
    this.getTodos();
  }
}
