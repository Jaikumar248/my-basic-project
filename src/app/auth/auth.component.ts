import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../Auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  // isLoginMode = true;
   
  // onSwitchMode(){
  //   this.isLoginMode = !this.isLoginMode;
  // }
  // onSubmit(form: NgForm){
  //  console.log(form.value)   
  //  form.reset() 
  // }
  isLoginMode = true;
  isLoading = false;

  constructor(private authService: AuthService){}

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }
  onFormSubmit(authForm: NgForm) {
    if(!authForm.valid){
      return
    }
    this.isLoading = true;
    if(this.isLoginMode){
      // perform login request
    }else {
      this.authService.signUp(authForm.value.email, authForm.value.password).subscribe(response => {
        console.log(response);
        this.isLoading = false;
      },error => {
        console.log(error);
        this.isLoading = false;
      })
    }
  }
}
