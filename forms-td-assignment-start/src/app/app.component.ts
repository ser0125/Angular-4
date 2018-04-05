import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitted = false;
  @ViewChild('f') signupForm: NgForm;
  defaultOption = 'advanced';
  userdata = {
    email: '',
    subscription: '',
    password: ''
  };


  onSubmit() {
    console.log(this.signupForm);
  this.userdata.email = this.signupForm.controls.email.value;
  this.userdata.subscription = this.signupForm.controls.subscriptions.value;
  this.userdata.password = this.signupForm.controls.password.value;
  this.submitted = true;
  }
}
