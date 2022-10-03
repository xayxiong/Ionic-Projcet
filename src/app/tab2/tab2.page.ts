import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  emial: string = '';
  password: string = '';
  constructor(private router: Router) { }


  loginProcess(){

    this.router.navigate(['home-screen'])
  }

}
