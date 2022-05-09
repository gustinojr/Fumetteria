import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm= new FormGroup({
     email: new FormControl(),
    password: new FormControl(),
  });
mail:string[]=[];
password:any[]=[];

constructor() {}

  ngOnInit() {}
updateProfile(){
  this.loginForm.setValue({
    email:[''],
    password:[''],
    })
  
}
}
