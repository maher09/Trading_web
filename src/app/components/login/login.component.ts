import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from '../signup/signup.component';


@Component({
    selector: 'app-login',
    imports: [CommonModule, SignupComponent],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
  isSignupVisible = false;
 

  toggleSignup() {
    this.isSignupVisible = !this.isSignupVisible;
   
     
  }

}
