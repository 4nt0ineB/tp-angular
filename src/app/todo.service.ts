import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './model/todo';
import { catchError, from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private TodoUrl =
    'https://europe-west1-cours-angular-263913.cloudfunctions.net/todoapp/todo';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>(this.TodoUrl)
      .pipe(map((result: any) => result.todos));
  }

  createTodo(label: string): Observable<boolean> {
    if (!label) return of(false);
    return this.http.post<boolean>(this.TodoUrl, { label: label }).pipe(
      map((x) => true),
      catchError((e) => of(false))
    );
  }

  updateTodo(todo: Todo): Observable<boolean> {
    return this.http.put<boolean>(this.TodoUrl + '/' + todo.id, todo).pipe(
      map((x) => true),
      catchError((e) => of(false))
    );
  }

  deleteTodo(id: string): Observable<boolean> {
    return this.http.delete<boolean>(this.TodoUrl + '/' + id).pipe(
      map((x) => true),
      catchError((e) => of(false))
    );
  }
}
