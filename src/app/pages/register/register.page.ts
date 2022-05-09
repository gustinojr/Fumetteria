import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm = new FormGroup({
    name: new FormControl(),
    surname: new FormControl(),
    password: new FormControl(),
    passwordConfirm: new FormControl(),
    email: new FormControl(),
    emailConfirm: new FormControl(),
  });
  name:string[]=[]
  surname:string[]=[]
  email:any[]=[]
  password:any[]=[]

  constructor() { }

  ngOnInit() {
  }
newProfile(){
  this.registerForm.setValue({
    email:[''],
    emailConfirm:[''],
    password:[''],
    passwordConfirm:[''],
    name:[''],
    surname:[''],
  })
}
}
