import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: [''],
    password: ['']
  });

onSubmit() {
  console.log(this.loginForm.value);
  this.route.navigate(['/registration']);
}

  constructor(private fb: FormBuilder, private route: Router) { }

  ngOnInit() {
  }

}
