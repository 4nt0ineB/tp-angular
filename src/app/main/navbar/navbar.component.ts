import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  searchField: string;

  @Output()
  searchFieldEmitter = new EventEmitter<string>();

  constructor() {}

  submit(form: NgForm): void {
    if (!form.valid) {
      return;
    }
    this.searchFieldEmitter.emit(this.searchField);
    form.reset();
  }

  ngOnInit() {}
}
