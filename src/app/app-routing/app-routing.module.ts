import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { LoginComponent } from '../login/login.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'todos/:username', component: TodoListComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
