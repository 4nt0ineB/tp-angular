import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomDatePipe } from './custom-date.pipe';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-list/todo-item/todo-item.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { TodoFormComponent } from './todo-list/todo-form/todo-form.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    TodoFormComponent,
    CustomDatePipe,
    TodoListComponent,
    TodoItemComponent,
    LoginComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
