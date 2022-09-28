import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.page.html',
  styleUrls: ['./login-screen.page.scss'],
})
export class LoginScreenPage implements OnInit {

  phone: string = '';
  password: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loginProcess(){

    this.router.navigate(['home-screen'])
  }

}
