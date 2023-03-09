import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {


  resetform = new FormGroup({
    user_email : new FormControl('',[Validators.required,Validators.email]),
    
  })
  resetUser(){
    alert("Password reset successfully");
  }

  get user_email(){
  return this.resetform.get('user_email') 
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
