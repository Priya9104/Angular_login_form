import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl:'./signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {

  sinupform = new FormGroup({
    firstname : new FormControl('',[Validators.required]),
    lastname : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/),Validators.minLength(5)]),
  })

  signupUser(){
    alert("new user added successfully");
  }

  get password(){
    return this.sinupform.get('password');
  }


  changetype:boolean =true;
  viewpass(){
    return this.changetype = !this.changetype;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
