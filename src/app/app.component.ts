import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { PasswordChecker } from './custom-validators/password-checker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'signup-reactive';

  registerForm!: FormGroup;
  onSubmitted = false;


  constructor(private formbuilder: FormBuilder){}


  ngOnInit(): void {
    
    this.registerForm = this.formbuilder.group({
      firstName : ['' , Validators.required],
      lastName: ['', Validators.required],
      email : ['', [Validators.required , Validators.email]],
      password : ['', [Validators.required , Validators.minLength(6)]],
      confirmpassword : ['', Validators.required],
      acceptTandC : [false , Validators.requiredTrue]
    
    },{
      Validators: PasswordChecker('password', 'confirmpassword')
    });
  }

  get h(){
    return this.registerForm.controls;
  }

  onSubmit(){
    this.onSubmitted = true;
    if(this.registerForm.invalid){
      return;
    }

    console.table(this.registerForm.value)
    console.table(this.registerForm);

    alert("Success Signup \n" + JSON.stringify(this.registerForm.value))
  }


  onReset(){
    this.onSubmitted = false;
    this.registerForm.reset();
  }
}
