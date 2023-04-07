declare var M: any;
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LocalisationService } from './localisation.service';
import { Todo } from './model/todo';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoService } from './todo.service';
import { FormControl, FormGroup } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  imports: [CommonModule, FormsModule, TodoItemComponent, ReactiveFormsModule],
  providers: [TodoService, LocalisationService],
  standalone: true,
})
export class TodoListComponent implements OnInit {
  public textInput: string;
  public form: any;

  constructor(
    public todoService: TodoService,
    public localisationService: LocalisationService,
    private formBuilder: FormBuilder
  ) {
    this.todoService = todoService;
    this.localisationService = localisationService;
  }

  updateTodo(todo: Todo): void {
    this.todoService.updateTodo(todo);
    M.toast({ html: 'Mise à jour effectuée' });
  }

  addTodo(): void {
    if (this.form.valid) {
      this.todoService.createTodo(this.form.value.label, this.form.value.city);
      M.toast({
        html: "La tâche '" + this.form.value.label + "' à été ajouté",
      });
      this.form.reset();

      this.localisationService.addCity(this.form.value.label);
      this.updateCities();
      return;
    }
  }

  updateCities() {
    let data = {};
    this.localisationService.searchCity('').forEach((c) => {
      data[c.toString()] = null;
    });

    let elems = document.querySelectorAll('.autocomplete');
    M.Autocomplete.getInstance(elems)?.instance.destroy();

    M.Autocomplete.init(elems, {
      data: data,
    });
  }

  ngOnInit() {
    //console.log(this.cities);
    this.form = this.formBuilder.group(
      {
        label: new FormControl('', [
          Validators.required,
          Validators.minLength(1),
        ]),
        city: new FormControl('', Validators.required),
      },
      { updateOn: 'submit' }
    );
    this.updateCities();
  }
}
