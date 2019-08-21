import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  num = 3;
  registrationForm = this.fb.group({
    firstname: [''],
    lastname: [''],
    sports: [''],
    music: [''],
    dance: [''],
    gardening: [''],
    dob: [''],
    bloodgroup: [''],
    gender: [''],
    mobile: this.fb.array([this.fb.control('')]),
    email: this.fb.array([this.fb.control('')]),
    education: this.fb.array([this.createTable()]),

  });

  // onSubmit() {
  //   console.log(this.registrationForm.value);
  // }

  onSubmit() {
      this.http.post('http://www.mocky.io/v2/5d5b97103200006e00628930', this.registrationForm.value, {responseType: 'json'},
    )
    .subscribe(data => {
      console.log('hi', data);
    });
      console.log(this.registrationForm.value);
  }

  // onSubmit() {
  //   this.http.get(' http://www.mocky.io/v2/5d5b97dc320000570062893a')
  //   .subscribe(data => {
  //     console.log('hi', data);
  //   });
  //   console.log(this.registrationForm.value);
  // }

  get mobile() {
    return this.registrationForm.get('mobile') as FormArray;
  }

  addMobile() {
    this.mobile.push(this.fb.control(''));
  }

  removeMobile(val) {
    this.mobile.removeAt(val);
  }

  get email() {
    return this.registrationForm.get('email') as FormArray;
  }

  addEmail() {
    this.email.push(this.fb.control(''));
  }

  removeEmail(val) {
    this.email.removeAt(val);
  }

  createTable() {
    return this.fb.group({
      qualification: '',
      institute: '',
      board: '',
      mark: '',
      yearofpassing: ''
    });
  }

  get education() {
    return this.registrationForm.get('education') as FormArray;
  }

  addItem() {
    this.education.push(this.createTable());
  }
  removeItem(val) {
    this.education.removeAt(val);
  }

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
  }

}
