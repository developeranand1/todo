import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  userLogin!:FormGroup;

  constructor(private fb:FormBuilder, private router:Router){}

  ngOnInit(){
    this.userloginForm();
  }

  userloginForm(){
    this.userLogin=this.fb.group({
      userid:[''],
      password:[''],
    })
  }


  onLoginUser(){
    console.log(this.userLogin.value);
    this.router.navigate(['/booking-tickets'])
  }

  showPassword() {
    const inputPassword = document.getElementById(
      'password'
    ) as HTMLInputElement;
    inputPassword.type = inputPassword.type === 'password' ? 'text' : 'password';
  }
}
