import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    user_email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/),Validators.minLength(5)]),
  })
  loginUser(){
    alert("welcome user");
  }

  get user_email(){
  return this.loginForm.get('user_email') 
  }
  
  get password(){
    return this.loginForm.get('password')
  }

  changetype:boolean = true;
  viewpass(){
    return this.changetype = !this.changetype;
  }

  

   constructor() {}

  ngOnInit(): void {
    
  }
 

}
