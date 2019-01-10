import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = {
    username: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }

  login() {
    console.log('Login with username: ' + this.user.username);
  }

}