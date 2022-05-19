import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDto } from 'src/app/model/package/DTO/User-dto';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;
  isSubmitted = false;
  loginForm;
  clickable=true;
  constructor(private fb: FormBuilder, private loginService:LoginService) {}

ngOnInit() {this.loginForm = this.fb.group({
      email: ['', [Validators.email,
      Validators.required]],
      password: ['', [Validators.pattern,
      Validators.required,
      Validators.minLength(4)]]
    }
    )}
authentication (){
  this.loginService
  .login(this.email, this.password).subscribe(resp=> {
    const user: UserDto= resp;
    console.log(user)
  });
  
}
}




