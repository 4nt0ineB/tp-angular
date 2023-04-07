import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: string;

  constructor(private router: Router) {}
  submit(f: NgForm) {
    if (!f.valid) {
      return;
    }

    this.router.navigate(['../todos/' + this.login]);
    f.resetForm();
  }

  ngOnInit() {}
}
