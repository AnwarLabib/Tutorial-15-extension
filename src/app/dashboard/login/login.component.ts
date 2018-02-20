import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators} from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    logForm: FormGroup;
    login:any;
    username:string = '';
    password:string = '';
    req:string = 'This filed is required';
  constructor(private fb: FormBuilder) {
      this.logForm = fb.group({
          'username' : [null, Validators.required],
          'password' : [null, Validators.required],
      });
  }

  ngOnInit() {
  }
    loginfo(login){
        this.username=login.username;
        this.password=login.password;
    }

}
