import { Component, OnInit } from '@angular/core';
import {AbstractControl,FormBuilder, FormGroup,Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    regForm: FormGroup;
    register:any;
    username:string = '';
    password:string = '';
    cpassword:string = '';
    user_req:string = 'This filed is required';
    pass_req:string = 'This filed is required';
    same:string = '';
    passdm:string = 'Password does not match';
  constructor(private fb: FormBuilder) {
    this.regForm = fb.group({
        'username' : [null, Validators.required],
        'password' : [null, Validators.required],
           // Validators.pattern(/^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{4,20}/),
        'cpassword' : [null, Validators.required],
        validator: this.passwordConfirming
    });

  }

  ngOnInit() {

}

    passwordConfirming(c: AbstractControl): { invalid: boolean } {
        if (c.get('password').value !== c.get('cpassword').value) {
            return {invalid: true};
        }
    }
  userinfo(register){
      this.username=register.username;
      this.password=register.password;
      this.cpassword=register.cpassword;
}


}
