import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  login() {
    console.log('Login with username: ' + this.user.username);
  }

}
