import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './model/todo';
import { catchError, from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private TodoUrl =
    'https://europe-west1-cours-angular-263913.cloudfunctions.net/todoapp/todo/';

  constructor(private http: HttpClient) {}

  getTodos(username: string): Observable<Todo[]> {
    return this.http
      .get<Todo[]>(this.TodoUrl + `${username}/todos` )
      .pipe(map((result: any) => result.todos));
  }

  createTodo(username: string, label: string): Observable<boolean> {
    if (!label) return of(false);
    return this.http
      .post<boolean>(this.TodoUrl + `${username}/todos`, { label: label })
      .pipe(
        map((x) => true),
        catchError((e) => of(false))
      );
  }

  updateTodo(username: string, todo: Todo): Observable<boolean> {
    return this.http
      .put<boolean>(this.TodoUrl + `${username}/todos/` + todo.id, todo)
      .pipe(
        map((x) => true),
        catchError((e) => of(false))
      );
  }

  deleteTodo(username: string, id: string): Observable<boolean> {
    return this.http
      .delete<boolean>(this.TodoUrl + `${username}/todos/` + id)
      .pipe(
        map((x) => true),
        catchError((e) => of(false))
      );
  }
}
