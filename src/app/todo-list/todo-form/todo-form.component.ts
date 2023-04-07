import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  label: string;
  constructor() {}

  @Output()
  newLabelEvent = new EventEmitter<string>();

  submit(f: NgForm) {
    if (!f.valid) {
      return;
    }
    this.newLabelEvent.emit(this.label);
    f.resetForm();
  }

  clear(): void {
    this.label = '';
  }

  ngOnInit() {}
}
